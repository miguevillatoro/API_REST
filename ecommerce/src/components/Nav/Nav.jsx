import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    const [carritoVisible, setCarritoVisible] = useState(false);

    const toggleCarrito = () => {
        setCarritoVisible(!carritoVisible);
    };

    return (
        <nav>
            <div className="logo">
                <Link className="Link-Logo" to="/">ECOOMERCE</Link>
            </div>
            <div className="right-side">
                <ul className="categorias">
                    <Link className="Link-menu" to="/womenfilter">MUJER</Link>
                    <Link className="Link-menu" to="/menfilter">HOMBRES</Link>
                    <Link className="Link-menu" to="/girlsfilter">NIÑA</Link>
                    <Link className="Link-menu" to="/boysfilter">NIÑO</Link>
                </ul>
                <div className="buscador">
                    <input type="text" placeholder="Buscar productos" />
                    <button><i className="bi bi-search"></i></button>
                </div>
                <div className="usuario">
                    <a href="/login"><i className="bi bi-person-fill"></i></a>
                </div>
                <div className="carrito" onClick={toggleCarrito}>
                    <i className="bi bi-cart4"></i>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
