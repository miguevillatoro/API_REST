import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <div className="logo">
                <h1>ECOOMERCE</h1>
            </div>
            <div className="right-side">
                <ul className="categorias">
                <li>MUJER</li>
                <li>HOMBRES</li>
                <li>NIÑOS/AS</li>
                </ul>
                <div className="buscador">
                    <input type="text" placeholder="Buscar productos" />
                    <button><i className="bi bi-search"></i></button>
                </div>
                <div className="usuario">
                    <a href="#"><i className="bi bi-person-fill"></i></a>
                </div>
                <div className="carrito">
                    <i className="bi bi-cart4"></i>
                </div>
            </div>
        </nav>
    );
}

export default Nav;