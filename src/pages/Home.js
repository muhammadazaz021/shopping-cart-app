// pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const sampleProducts = [
    { id: 1, name: 'Product 1', price: 10, image: '/images/download.jpeg' },
    { id: 2, name: 'Product 2', price: 20, image: '/images/photo 2.jpeg' },
    { id: 3, name: 'Product 3', price: 30, image: '/images/photo 3.jpeg' },
    { id: 4, name: 'Product 4', price: 40, image: '/images/photo 4.jpeg' },
    { id: 5, name: 'Product 5', price: 50, image: '/images/photo 5.jpeg' },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ProductList products={sampleProducts} />
    </div>
  );
}

export default Home;
