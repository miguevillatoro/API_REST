import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <header className="header">
        <div className="banner">
            <div className="capa"></div>
            <div className="info">
                <h1>ECOMMERCE</h1>
                <p>Tu estilo, tu elección, tu tienda</p>
                <a href="productfilter">Explorar más</a>
		</div>
	</div>
    </header>
    );
}

export default Banner;