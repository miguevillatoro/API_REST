import React from "react";
import "./Products.css";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section className="shop container section">
            <h2 className="section-title">Productos Recientes</h2>
            <div className="shop-content">
                
                <div className="product-box">
                    <img src="src/img/product-14.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/productdetails">Sudadera</Link>
                    <span className="price">$25</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>

                
                <div className="product-box">
                    <img src="src/img/product-16.jpg" alt="" className="product-img"/>
                    <h2 className="product-title">Pans</h2>
                    <span className="price">$30</span>
                    <i className="bi bi-bag add-cart"></i>
                </div> 

                <div className="product-box">
                    <img src="src/img/product-18.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/productdetails">Sudadera</Link>
                    <span className="price">$27</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>        

                <div className="product-box">
                    <img src="src/img/product-9.jpg" alt="" className="product-img"/>
                    <Link className="product-title" to="/productdetails">Sudadera</Link>
                    <span className="price">$25</span>
                    <i className="bi bi-bag add-cart"></i>
                </div>
            </div>
        </section>
    )
}

export default Products;