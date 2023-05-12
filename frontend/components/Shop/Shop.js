import React from 'react';
import Product from './Product';

const Shop = () => {
  const products = [
    { name: 'Lavender Oil', image: '/path/to/lavender.jpg', size: 5, price: 10 },
    { name: 'Peppermint Oil', image: '/path/to/peppermint.jpg', size: 15, price: 15 },
    // add more products here
  ];

  return (
    <div>
      <h1>Our Shop</h1>
      {products.map((product, index) => (
        <Product 
          key={index} 
          name={product.name} 
          image={product.image} 
          size={product.size} 
          price={product.price} 
        />
      ))}
    </div>
  );
};

export default Shop;