import style from "./About.module.css"
import image from "../Images/rickandmorty.png"

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.inputform}>
                    <div className={style.inputcontent}>
                        <div className={style.inputdist}>
                            <div className={style.inputtype}>
                                <h1 className={style.title}>Este es mi Proyecto Rick and Morty</h1>
                                <img src={image} alt="imagen de rick" className={style.logo} />
                                <p className={style.text}>Esta pagina se centra en traer personajes de la Serie "Rick and Morty" en formato de cartas, podemos buscar personajes, traer uno random, agregarlo a una lista de favoritos y clasificar la misma
                                </p>
                                <h2 className={style.credits}>Jesus Alejandro Ochoa Arias</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.design}>
                <h2>(mi imagen)</h2>
            </div>
        </div>
    )
}

