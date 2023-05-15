import React from 'react';
import Product from '../Product/Product';


const Shop = () => {
  const products = [
    { name: '1 Oil', image: 'assets/1.png', description: 'description', size: 15, price: 15 },
    { name: '2 Oil', image: 'assets/2.png', description: 'description', size: 15, price: 15 },
    { name: '3 Oil', image: 'assets/3.png', description: 'description', size: 15, price: 15 },
    { name: '4 Oil', image: 'assets/4.png', description: 'description', size: 15, price: 15 },
    { name: '5 Oil', image: 'assets/5.png', description: 'description', size: 15, price: 15 },
    { name: '6 Oil', image: 'assets/6.png', description: 'description', size: 15, price: 15 },
    { name: '7 Oil', image: 'assets/7.png', description: 'description', size: 15, price: 15 },
    { name: '8 Oil', image: 'assets/8.png', description: 'description', size: 15, price: 15 },
    { name: '9 Oil', image: 'assets/9.png', description: 'description', size: 15, price: 15 },
    { name: '10 Oil', image: 'assets/10.png', description: 1111, size: 15, price: 15 },
    { name: '11 Oil', image: 'assets/11.png', description: 'description', size: 15, price: 15 },
    { name: '12 Oil', image: 'assets/12.png', description: 'description', size: 15, price: 15 },
  ]

  return (
    <div>
      <h1>Our Shop</h1>
      {products.map((product, index) => (
        <Product 
          key={index} 
          name={product.name} 
          image={process.env.PUBLIC_URL + '/' + product.image} 
          size={product.size} 
          price={product.price} 
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Shop;