import style from "./Card.module.css"
import { Link } from "react-router-dom"
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      let character = {
         id,
         name,
         status,
         species,
         gender,
         origin,
         image,
         // myFavorites,
         onClose
      }

      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav(character)
      }
   }

   return (
      <div className={style.flipCard}>
         <div className={style.inner}>
            <div className={style.front}>
               <img src={image} alt='' className={style.img} />

            </div>
            <div className={style.back}>
               <div className={style.favorite}>
                  {
                     isFav ? (
                        <button onClick={handleFavorite} className={style.favoriteButton}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite} className={style.favoriteButton}>🤍</button>
                     )
                  }
               </div>
               {
                  onClose ? (
                     <button onClick={() => onClose(id)} className={style.close}>X</button>

                  ) : (
                     ""
                  )
               }
               <Link to={`/detail/${id}`} className={style.link}>
                  <h2 className={style.name}>{name}</h2>
               </Link>
               <h2 className={style.status}>State: {status}</h2>
               <h2 className={style.specie}> {species}</h2>
               <h2 className={style.gender}> {gender}</h2>
               <h2 className={style.origin}>{origin}</h2>
               <h2 className={style.id}>{id}</h2>

            </div>
         </div>
      </div>
   );
}

export const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);