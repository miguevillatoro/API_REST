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

            const isAdmin = response.data.isAdmin;
            console.log("Respuesta:", response.data);

            if (isAdmin) {
                window.location.href = "/admindashboard";
            } else {
                window.location.href = "/userdashboard";
            }
        } catch (error) {
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