var myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body)
    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    let id = req.params.id

    myFavorites = myFavorites.filter((char) => char.id != id)

    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}