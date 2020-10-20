import React from 'react';
import './ProductCard.css';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart, removeFromCart} from "./actions";


/** */
function ProductCard({id, name}) {
const dispatch = useDispatch(); // takes action with type key

function add(evt) {
  dispatch(addToCart(id));
}
function remove(evt) {
  dispatch(removeFromCart(id));
}

  return (
    <div className="ProductCard">
      <h6><Link to={`/products/${id}`}>{name}</Link></h6>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
    </div>
  );
}

export default ProductCard;
