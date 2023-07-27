import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css"

export default function Detail() {

    const { id } = useParams()

    let [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                }
            })
            .catch(error => window.alert(error.response.data.error))

        return setCharacter({});
    }, [id]);

    return (<div className={style.background}>
        {character.name && (
            <div className={style.container}>
                <div className={style.info}>
                    <div className={style.inputform}>
                        <div className={style.inputcontent}>
                            <div className={style.inputdist}>
                                <div className={style.inputtype}>
                                    <h1 className={style.name}>{character.name}</h1>
                                    <h2 className={style.status}>Status: {character.status}</h2>
                                    <h2 className={style.specie}>Specie: {character.species}</h2>
                                    <h2 className={style.gender}>Gender: {character.gender}</h2>
                                    <h2 className={style.origin}>Origin: {character.origin?.name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={character.image} alt="" className={style.image}></img>
            </div>
        )}
    </div>)
}