import React, { createContext, useState, useContext } from 'react';

// Create Cart Context
const CartContext = createContext();

// Custom hook for using cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Logic for adding to cart
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    // Logic for removing from cart
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
