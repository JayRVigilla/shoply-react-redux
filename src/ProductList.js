import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './ProductList.css';
import ProductCard from './ProductCard';

/** */
function ProductList() {
  //shallow equal: comparisons on OBJ (like state.inventory) are ===, therefore always flase
  const products = useSelector(state => state.inventory, shallowEqual); 
  const productIDs = Object.keys(products);

  return (
    <div className="ProductList">
      <ul>
        {productIDs.map(id => //key should be each key from store.inventory AKA products
            <ProductCard key={id} name={products[id].name} />
          )}
      </ul>
    </div>
  );
}

export default ProductList;
