const { Favorite } = require("../DB_connection")

const deleteFav = async (req, res) => {
    const { id } = req.params

    try {
        // await Favorite.destroy({ where: id })
        // const allFavs = Favorite.findAll()
        const userDelete = await Favorite.findByPk(id)
        await userDelete.destroy();
        const favorites = await Favorite.findAll()

        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = deleteFav;