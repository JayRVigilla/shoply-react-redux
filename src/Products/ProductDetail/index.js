import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom'
import './ProductDetail.css';


/**
* takes url param as id key in inventory
*/
function ProductDetail() {
  const { id } = useParams()
  const item = useSelector( store => store.inventory[id])

  return (
    <div className="ProductDetail">
      <img src={`${item.image_url}`}
        alt={`${item.name}`} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
}

export default ProductDetail;
