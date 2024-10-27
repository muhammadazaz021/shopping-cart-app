import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from './CartContext'; // Ensure the import is correct

const ProductItem = ({ product }) => {
  const { addToCart } = useCart(); // Use the custom hook to access addToCart

  return (
    <motion.div
      className="product-item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Use addToCart on click */}
    </motion.div>
  );
};

export default ProductItem;
