import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products') 
      .then(response => {
        console.log('res ', response)
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, []); 

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