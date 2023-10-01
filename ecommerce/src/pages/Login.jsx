import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="content">
            <div className="wrapper">
            <form action="">
                <h1>Inicio de Sesión</h1>
                <div className="input-box">
                    <input type="text" placeholder="Usuario" required />
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Contraseña"/>
                    <i className="bi bi-lock-fill"></i>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recuérdame</label>
                    <a href="#">¿Has olvidado tu contraseña?</a>
                </div>
                <button type="submit" className="btn">Iniciar sesión</button>
                
                <div className="register-link">
                    <p>¿No tiene una cuenta? <a href="/register">Regístrese</a></p>
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login;