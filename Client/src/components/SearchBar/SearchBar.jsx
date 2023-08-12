import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({ onSearch, random }) {
   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.searchBar}>
         <input
            type='search'
            onChange={handleChange}
            value={id}
            className={style.input}
            placeholder="Introduce un Id (1-826)" />
         <button onClick={() => onSearch(id)} className={style.button}>Agregar</button>
         <button className={style.button} onClick={random}>Random Character</button>
      </div>
   );
}
