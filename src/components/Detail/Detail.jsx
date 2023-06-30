import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {

    const { id } = useParams()

    let [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                    console.log(data)
                }
            })
            .catch(error => window.alert(error.response.data.error))

        return setCharacter({});
    }, [id]);

    return (<div>
        {character.name && (
            <>
                <h1>{character.name}</h1>
                <h2>{character.status}</h2>
                <h2>{character.specie}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin?.name}</h2>
                <img src={character.image}></img>
            </>
        )}
    </div>)
}