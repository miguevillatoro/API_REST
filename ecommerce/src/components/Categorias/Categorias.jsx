import React from "react";
import "./Categorias.css";

const Categorias = () => {
    return (
        <section className="shop container section">
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/Mujer.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Mujer</h2>
                </div>

                
                <div className="product-box">
                    <img src="src/img/Hombre.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Hombre</h2>
                </div>

                
                <div className="product-box">
                    <img src="src/img/Niña.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Niña</h2>
                </div>

            
                <div className="product-box">
                    <img src="src/img/Niño.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Niño</h2>
                </div>
            </div>
        </section>
    )
}

export default Categorias;