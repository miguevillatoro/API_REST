import React from "react";
import "./Categorias.css";
import {Link} from "react-router-dom"

const Categorias = () => {
    return (
        <section className="shop container section">
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/Mujer.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/womenproducts">Mujer</Link>
                </div>

                
                <div className="product-box">
                    <img src="src/img/Hombre.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/menproducts">Hombre</Link>
                </div>

                
                <div className="product-box">
                    <img src="src/img/Niña.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/girlsproducts">Niña</Link>
                </div>

            
                <div className="product-box">
                    <img src="src/img/Niño.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/boysproducts">Niño</Link>
                </div>
            </div>
        </section>
    )
}

export default Categorias;