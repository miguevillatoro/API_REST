import React, { useState } from 'react';
import axios from 'axios';
const FormularioPost = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({
        ...datos,
        [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('https://tu-api.com/tu-endpoint', datos);
        console.log('Respuesta del servidor:', response.data);
        } catch (error) {
        console.error('Error al enviar datos:', error);
        }
    };
    return (
        <div>
        <h2>Formulario de Envío POST</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={datos.email}
                onChange={handleChange}
            />
            </div>
            <button type="submit">Enviar</button>
        </form>
        </div>
    );
};
export default FormularioPost;