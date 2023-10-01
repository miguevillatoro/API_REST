import React from "react";
import './Login.css';

const Register = () => {
    return (
        <div className="content">
            <div className="wrapper">
            <form action="">
                <h1>Crear cuenta</h1>
                <div className="input-box">
                    <input type="text" placeholder="Nombre" required />
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Apellido" required />
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña"/>
                    <i className="bi bi-lock-fill"></i>
                </div>
                <button type="submit" className="btn">Registrarme</button>

                <div className="sesion-link">
                    <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
                </div>

            </form>
        </div>
        </div>
    )
}

export default Register;