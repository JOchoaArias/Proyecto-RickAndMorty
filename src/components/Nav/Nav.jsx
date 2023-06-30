import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom"
import style from "./Nav.module.css"

export default function Nav({ onSearch, logout, random }) {
    return <div className={style.nav}>
        <div >
            <button className={style.button}>
                <Link to="/about" className={style.link}>About</Link>
            </button>
            <button className={style.button}>
                <Link to="/home" className={style.link}>Home</Link>
            </button>
            <button className={style.button}>
                <Link to="/favorites" className={style.link}>Favorites</Link>
            </button>
        </div>
        <div className={style.logout}>
            <button className={style.logoutButton} onClick={logout}>LogOut</button>
        </div>
        <SearchBar onSearch={onSearch} random={random} />
    </div>
}