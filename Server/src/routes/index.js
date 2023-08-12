const getFav = require("../controllers/getFav")
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { Router } = require("express")
const postFav = require("../controllers/postFav")
const deleteFav = require("../controllers/deleteFavs")
const postUser = require("../controllers/postUser")

const router = Router()

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/login', postUser)
router.get('/fav', getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router