import React from "react";
import "./Products.css";
import {Link} from "react-router-dom";

const WomenProducts = () => {
    return (
        <section className="shop container section">
            <h2 className="section-title">Productos Recientes</h2>
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/product-1.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/productdetails">Sueter</Link>
                    <span className="price">$25</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-2.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Vestido</h2>
                    <span className="price">$100</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-10.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Vestido</h2>
                    <span className="price">$45</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

            
                <div className="product-box">
                    <img src="src/img/product-4.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Blusa</h2>
                    <span className="price">$24.04</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

            
                <div className="product-box">
                    <img src="src/img/product-5.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Sueter</h2>
                    <span className="price">$50</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

            
                <div className="product-box">
                    <img src="src/img/product-6.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Pantalón</h2>
                    <span className="price">$50</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                <div className="product-box">
                    <img src="src/img/product-13.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Falda</h2>
                    <span className="price">$30</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                <div className="product-box">
                    <img src="src/img/product-15.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Blusa</h2>
                    <span className="price">$25</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>
            </div>
        </section>
    )
}

export default WomenProducts;