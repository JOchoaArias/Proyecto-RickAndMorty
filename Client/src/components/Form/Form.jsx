import style from "./Form.module.css"
import { useState } from "react"
import validate from "./validation"

export default function Form(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }

    return (
        <form className={style.form}>
            <div className={style.inputform}>
                <div className={style.inputcontent}>
                    <div className={style.inputdist}>
                        <div className={style.inputtype}>

                            <input
                                name="email"
                                type="email"
                                value={userData.email}
                                placeholder="Ingrese su Email"
                                onChange={handleChange}
                                className={style.inputis}
                            ></input>
                            <p className={style.errors}>{errors.email}</p>


                            <input
                                name="password"
                                type="password"
                                value={userData.password}
                                placeholder="Ingrese su contraseña"
                                onChange={handleChange}
                                className={style.inputis}
                            ></input>
                            <p className={style.errors}>{errors.password}</p>
                            <button onClick={handleSubmit} className={style.btn}>Log in</button>
                        </div>
                    </div>
                </div>
            </div>

        </form>)
}