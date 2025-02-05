import React from 'react';
import './Cart.css';
import { useCart } from '../../contextApi/CartContext'; 

const Cart = () => {
  const { cart, removeFromCart } = useCart(); 
  return ( 
    <div className="cart-container">
      <h1>Your Cart</h1>
     
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>💲{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
