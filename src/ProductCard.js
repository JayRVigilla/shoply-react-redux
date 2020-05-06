import React from 'react';
import './ProductCard.css';
import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "./actions"


/** */
function ProductCard({id, name}) {
const dispatch = useDispatch(); // takes action with type key


function add(evt) {dispatch(addToCart(id));}
function remove(evt) {dispatch(removeFromCart(id));}

  return (
    <li className="ProductCard">
      <h6>{name}</h6>
      <button onClick={add()}>+</button>
      <button onClick={remove()}>-</button>
    </li>
  );
}

export default ProductCard;
