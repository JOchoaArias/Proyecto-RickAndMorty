const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios")

const getCharById = async (req, res) => {
    const id = parseInt(req.params.id)

    try {
        const { data } = await axios(`${URL}${id}`)

        const { status, name, species, origin, image, gender } = data

        let character = { id, status, name, species, origin, image, gender }

        return name
            ? res.status(200).json(character)
            : res.status(404).send('Not found')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCharById;