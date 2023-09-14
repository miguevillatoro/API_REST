import React from "react";
import "./Products.css";

const Products = () => {
    return (
        <section className="shop container section">
            <h2 className="section-title">Productos Recientes</h2>
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/product-1.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Sueter</h2>
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
                    <img src="src/img/product-3.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Blusa para niña</h2>
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
                    <h2 className="product-title">Pantalón en campana</h2>
                    <span className="price">$50</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                <div className="product-box">
                    <img src="src/img/product-7.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Camisa</h2>
                    <span className="price">$70</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                <div className="product-box">
                    <img src="src/img/product-8.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Pantalón</h2>
                    <span className="price">$45</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>
            </div>
        </section>
    )
}

export default Products;