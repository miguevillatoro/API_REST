import React from 'react';
import './NuestrasTiendas.css';

const NuestrasTiendas = () => {
    const tiendas = [
        {
        nombre: 'Tienda Principal',
        direccion: 'Calle Principal, 123',
        ciudad: 'Ciudad Principal',
        },
        {
        nombre: 'Tienda Secundaria',
        direccion: 'Calle Secundaria, 456',
        ciudad: 'Ciudad Secundaria',
        },
    ];

    return (
        <div className="nuestras-tiendas">
            <div className='cont-tiendas'>
                <h2>Nuestras Tiendas</h2>
                <div className="tiendas-grid">
                    {tiendas.map((tienda, index) => (
                    <div key={index} className="tienda">
                        <h3>{tienda.nombre}</h3>
                        <p>Dirección: {tienda.direccion}</p>
                        <p>Ciudad: {tienda.ciudad}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NuestrasTiendas;
