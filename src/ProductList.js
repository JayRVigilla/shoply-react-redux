import React from 'react';
import './Component.css';
import ProductCard from "./ProductCard "

/** */
function ProductList() {

  return (
    <div className="ProductList">
      {
        products.map( product =>
          <li><ProductCard key= name={product.name}/></li>)
      }
    </div>
  );
}

export default ProductList;
