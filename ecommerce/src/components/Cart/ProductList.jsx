import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div>
        <h2>Productos</h2>
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductList;
