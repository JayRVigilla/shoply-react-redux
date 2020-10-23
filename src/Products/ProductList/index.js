import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './ProductList.css';
import ProductCard from '../ProductCard';

/** */
function ProductList() {
  //shallow equal: comparisons on OBJ (like state.inventory) are ===, therefore always flase
  const products = useSelector(store => store.inventory, shallowEqual);
  const productIDs = Object.keys(products);

  return (
    <div className="ProductList">
        {productIDs.map(id =>( //key should be each key from store.inventory AKA products
          <ProductCard
            key={id}
            name={products[id].name}
            id={id}
            image_url={products[id].image_url}
            description={products[id].description} />
          ))}
    </div>
  );
}

export default ProductList;
