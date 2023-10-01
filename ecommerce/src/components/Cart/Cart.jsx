import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
        <h2>Carrito de Compra</h2>
        <ul>
            {cartItems.map((item) => (
            <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Cart;
