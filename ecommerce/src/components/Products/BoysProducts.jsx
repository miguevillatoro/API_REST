import React from "react";
import "./Products.css";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section className="shop container section">
            <h2 className="section-title">Productos Recientes</h2>
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/product-20.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/productdetails">Conjunto</Link>
                    <span className="price">$15</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-21.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Sudadera</h2>
                    <span className="price">$25</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-22.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Sudadera</h2>
                    <span className="price">$20</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

            
                <div className="product-box">
                    <img src="src/img/product-23.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Camisa</h2>
                    <span className="price">$24</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>
            </div>
        </section>
    )
}

export default Products;