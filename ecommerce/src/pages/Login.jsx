import React, { useState } from "react";
import './Login.css';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/api/user/login", formData);

            // Aquí asumimos que el servidor devuelve una propiedad "isAdmin" en la respuesta
            const isAdmin = response.data.isAdmin;

            // Manejar la respuesta aquí, por ejemplo, guardar el token de autenticación en el almacenamiento local.
            console.log("Respuesta:", response.data);

            if (isAdmin) {
                // Redirige al usuario administrador a la página de administrador después del inicio de sesión
                window.location.href = "/admindashboard";
            } else {
                // Redirige al usuario normal a su página después del inicio de sesión
                window.location.href = "/userdashboard";
            }
        } catch (error) {
            // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario.
            console.error("Error:", error);
        }
    };

    return (
        <div className="content">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Inicio de Sesión</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <i className="bi bi-lock-fill"></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Recuérdame
                        </label>
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </div>
                    <button type="submit" className="btn">
                        Iniciar sesión
                    </button>

                    <div className="register-link">
                        <p>
                            ¿No tiene una cuenta? <a href="/register">Regístrese</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;