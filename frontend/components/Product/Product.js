import React from 'react';

const Product = ({ name, image, size, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Size: {size} ml</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
