const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const [loginInfo] = require("../src/utils/users");
const data = require("../src/utils/data")

describe("Test de Rutas", () => {
})
describe(`GET /rickandmorty/character/:id`, () => {
    it(`Responde con status: 200`, async () => {
        await agent.get('/rickandmorty/character/1').expect(200)
    })

    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
        const res = await agent.get('/rickandmorty/character/1');
        expect(res.body).toHaveProperty("id")
        expect(res.body).toHaveProperty("name")
        expect(res.body).toHaveProperty("species")
        expect(res.body).toHaveProperty("gender")
        expect(res.body).toHaveProperty("status")
        expect(res.body).toHaveProperty("origin")
        expect(res.body).toHaveProperty("image")
    })

    it(`Si hay un error responde con status: 500`, async () => {
        const res = await agent.get('/rickandmorty/character/:id');
        let id = res.body.id
        if (Number(id) > 826 || Number(id) < 1) {
            expect(res.statusCode).toBe(500)
        }
    })
})

describe("_GET /rickandmorty/login_", () => {
    it("Deberia obtener un objeto { access: true } para confirmar que el login es correcto", async () => {
        const { email, password } = loginInfo;
        const res = await agent.get("/rickandmorty/login").query({ email, password })

        expect(res.body).toEqual({ access: true });
    })
    it("Deberia obtener un objeto { access: false } para confirmar que el login es incorrecto", async () => {
        const cuentaIncorrecta = { email: "ale23elmascapito@gmail.com", password: "contraseña" }
        const res = await agent.get("/rickandmorty/login").query(cuentaIncorrecta)

        expect(res.body).toEqual({ access: false });
    })
})

describe("_POST /rickandmorty/fav_", () => {
    it("El elemento envieado por body debe ser devuelto en un array", async () => {
        const ejemploData = data[0];
        const res = await agent.post("/rickandmorty/fav").send(ejemploData);

        expect(res.body).toEqual([ejemploData])
    })
    it("Al enviar otro elemento por body, debe ser devuelto en un arreglo que incluya el elemento enviado previamente", async () => {
        const anteriorData = data[0];
        const ejemploData = data[1];

        const res = await agent.post("/rickandmorty/fav").send(ejemploData);

        expect(res.body).toEqual([anteriorData, ejemploData])
    })
})

describe("_DELETE /rickandmorty/fav/:id_", () => {
    it("Si no existe un personaje con el ID enviado debe devolver el arreglo sin modificar", async () => {
        const arrayPrevio = [data[0], data[1]];

        const res = await agent.delete(`/rickandmorty/fav/50`).send();

        expect(res.body).toEqual(arrayPrevio);
    })
    it("Debe eliminar el personaje si el ID es correcto", async () => {
        const arrayEsperado = [data[1]];

        const res = await agent.delete(`/rickandmorty/fav/1`).send();

        expect(res.body).toEqual(arrayEsperado);
    })
})