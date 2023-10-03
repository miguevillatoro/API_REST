import React from "react";
import "./Products.css";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section className="shop container section">
            <h2 className="section-title">Productos Recientes</h2>
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/product-12.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/productdetails">Vestido</Link>
                    <span className="price">$25</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-11.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Blusa</h2>
                    <span className="price">$15</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-3.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Blusa</h2>
                    <span className="price">$20</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

            
                <div className="product-box">
                    <img src="src/img/product-19.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Blusa</h2>
                    <span className="price">$24.04</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>
            </div>
        </section>
    )
}

export default Products;