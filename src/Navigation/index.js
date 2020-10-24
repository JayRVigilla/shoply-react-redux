import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";
import './Navigation.css';
import Logo from '../images/bunny-ears.png';


/** */
function Navigation() {
  const cartContents = useSelector(store => store.cartContents, shallowEqual); //obj

  function calcCartCount(cart) {
    let total = 0
    if (Object.keys(cart).length > 0) {
      total = Object.values(cart).reduce((a, b) => a + b)
    }
    return total
  }

  return (
    <div className="Navigation">
      <Link to="/" className="logo link">
        <img src={Logo} alt="floppy eared bunny"/>
        E-Store Bunny
      </Link>

      <div className="cart icon">
        <Link to="/cart">
          <i className="fas fa-shopping-cart">
            Cart ({calcCartCount(cartContents)})
          </i>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
