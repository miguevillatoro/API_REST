import React, { useState } from "react";
import './Login.css';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isRegistered, setIsRegistered] = useState(false);

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
            const response = await axios.post("http://localhost:3001/api/user/register", formData);
            console.log("Registro exitoso:", response.data);
            setIsRegistered(true); // Mostrar el alert en caso de registro exitoso
        } catch (error) {
            console.error("Error al registrar:", error);

            // Imprimir más detalles sobre el error
            if (error.response) {
                console.error("Respuesta de error:", error.response.data);
            }

            // También puedes imprimir el status code para obtener más información
            console.error("Código de estado:", error.response?.status);
        }
    };

    return (
        <div className="content">
            {isRegistered && (
                <div className="alert">
                    Registro exitoso. ¡Bienvenido!
                </div>
            )}
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Crear cuenta</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
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
                            placeholder="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <i className="bi bi-lock-fill"></i>
                    </div>
                    <button type="submit" className="btn">
                        Registrarme
                    </button>

                    <div className="sesion-link">
                        <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
