import React, { useState } from 'react';
import './Dashboard.css';

const UserDashboard = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Nombre Usuario',
        email: 'usuario@ejemplo.com',
        // Otros detalles relevantes
    });

    const [activities, setActivities] = useState([
        { id: 1, action: 'Acción 1', date: '2023-10-10' },
        { id: 2, action: 'Acción 2', date: '2023-10-08' },
        // Otras actividades recientes
    ]);

    // Funcionalidad específica del usuario
    // Puedes definir funciones adicionales aquí

    return (
        <div className="dashboard">
            <div className="personal-info">
                <h2>Información Personal</h2>
                <p><strong>Nombre:</strong> {userInfo.name}</p>
                <p><strong>Email:</strong> {userInfo.email}</p>
                {/* Otros detalles personales */}
            </div>
            <div className="recent-activities">
                <h2>Últimas Actividades</h2>
                <ul>
                    {activities.map(activity => (
                        <li key={activity.id}>
                            <p><strong>Acción:</strong> {activity.action}</p>
                            <p><strong>Fecha:</strong> {activity.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Otras funcionalidades específicas del usuario */}
        </div>
    );
};

export default UserDashboard;