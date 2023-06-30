import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import style from "./Favorites.module.css"
import { filterCards, orderCards, showFavs } from "../Redux/actions"
import { useState } from "react"

export const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    const handleShow = () => {
        dispatch(showFavs())
    }

    return <div >
        <div>
            <button onClick={handleShow}>Show All Favorites</button>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className={style.cards}>
            {myFavorites?.map((fav) => (
                <Card
                    id={fav.id}
                    key={fav.id}
                    name={fav.name}
                    species={fav.species}
                    status={fav.status}
                    origin={fav.origin}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                />
            ))}
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(mapStateToProps, null)(Favorites);