import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";
import './Navigation.css';
import PokeShopLogo from '../images/PokeShopLogo.svg';


/** */
function Navigation() {
  const cartContents = useSelector(store => store.cartContents, shallowEqual);

  

  return (
    <div className="Navigation">
      <Link to="/">
        <img src={PokeShopLogo} alt="" />
        PokeShop
      </Link>

      <div className="cart icon">
        <p> Count of Items and Total Go Here</p>
        <Link to="/cart"><i class="fas fa-shopping-cart">Cart</i></Link>
      </div>
    </div>
  );
}

export default Navigation;
