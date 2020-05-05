import React from 'react';
import './ProductCard.css';


/** */
function ProductCard({ name, AddCart, RemoveCart }) {
  return (
    <div className="ProductCard">
      <h6>{name}</h6>
      <button onclick={AddCart}></button>
      <button onclick={RemoveCart}></button>
    </div>
  );
}

export default ProductCard;
