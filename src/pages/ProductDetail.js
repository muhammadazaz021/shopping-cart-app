// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  // Example of mock data, ideally would fetch from API
  const product = {
    id,
    name: `Product ${id}`,
    description: `Description for product ${id}`,
    price: `$${id * 10}.00`,
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
