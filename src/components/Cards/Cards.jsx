import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards({ characters, onClose }) {
   const card = characters.map((character) =>
      < Card
         key={character.id}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         onClose={onClose}
         className={style.card} />

   )

   return <div className={style.cards}>
      {card}
   </div>;
}
