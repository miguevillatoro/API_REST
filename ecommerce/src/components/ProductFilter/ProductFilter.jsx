import React from "react";
import "./ProductFilter.css";
import Products from "../Products/Products";

const ProductFilter = () => {
    return (
        <div className="content-filter">
            <div className="filter">
                <h2 className="title-filter">Todo</h2>
                <h2 className="title-filter">Mujeres</h2>
                <ul>
                    <li>Blusa</li>
                    <li>Pantalones</li>
                    <li>Sueter</li>
                    <li>Shorts</li>
                    <li>Faldas</li>
                </ul>
                <h2 className="title-filter">Hombres</h2>
                <ul>
                    <li>Camisa</li>
                    <li>Pantalones</li>
                    <li>Sueter</li>
                    <li>Shorts</li>
                </ul>
                <h2 className="title-filter">Niñas</h2>
                <ul>
                    <li>Blusa</li>
                    <li>Vestidos</li>
                </ul>
                <h2 className="title-filter">Niños</h2>
                <ul>
                    <li>Camisa</li>
                    <li>Pantalones</li>
                    <li>Sudadera</li>
                </ul>
            </div>
            <Products/>
        </div>
    )
}

export default ProductFilter;