import React from 'react';
import './ProductCard.css';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart, removeFromCart} from "../../actions/actions";


/** */
function ProductCard({id, name, description, image_url}) {
const dispatch = useDispatch(); // takes action with type key

  function add(evt) {
  dispatch(addToCart(id));
}
  function remove(evt) {
  dispatch(removeFromCart(id));
}

  return (
    <div className="ProductCard">
      <Link to={`/products/${id}`}>
        <img src={`${image_url}`} alt={`${description}`}/>
        <h6>{name}</h6>
      </Link>

      <div className="cart-buttons">
          <i class="fas fa-plus-square" onClick={add}></i>
          <i class="fas fa-minus-square" onClick={remove}></i>
      </div>

    </div>
  );
}

export default ProductCard;
