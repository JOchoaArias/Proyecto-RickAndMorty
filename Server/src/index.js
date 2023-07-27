const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const app = require("./app")
const bodyParser = require("body-parser")


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))

server.use(express.json())

server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
})