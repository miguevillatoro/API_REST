import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <header className="header">
        <div className="header-content">
            <div className="left-content">
            <h1>ECOMMERCE</h1>
            <p>Tu estilo, tu elección, tu tienda</p>
            <button className="explore-button">Explorar más</button>
            </div>
        </div>
    </header>
    );
}

export default Banner;