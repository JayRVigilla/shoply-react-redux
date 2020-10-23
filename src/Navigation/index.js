import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";
import './Navigation.css';
import Logo from '../images/bunny-ears.png';


/** */
function Navigation() {
  const cartContents = useSelector(store => store.cartContents, shallowEqual); //obj

  return (
    <div className="Navigation">
      <Link to="/" className="logo link">
        <img src={Logo} alt="floppy eared bunny"/>
        E-Store Bunny
      </Link>

      <div className="cart icon">
        <p> Count of Items and Total Go Here</p>
        <Link to="/cart"><i class="fas fa-shopping-cart">Cart</i></Link>
      </div>
    </div>
  );
}

export default Navigation;
