import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
