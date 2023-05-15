import React from 'react';
import './Product.css'; // import the CSS

const Product = ({ name, image, size, price, description }) => {
  return (
    <div className="product">
      <h2 className="product-name">{name}</h2>
      <img className="product-image" src={image} alt={name} />
      <p className="product-size">Size: {size} ml</p>
      <p className="product-price">Price: ${price}</p>
      <p className="product-description">{description}</p>
      <button className="product-button">Buy</button>
    </div>
  );
};

export default Product;
