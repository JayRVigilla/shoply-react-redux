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
      <Link to="/" className="logo">
        <img src={PokeShopLogo} alt="pokeball" />
        PokeShop
      </Link>

      <div className="cart icon">
        <span>
          <Link to="/cart"><i class="fas fa-shopping-cart">Cart(#{})</i></Link>
        </span>
      </div>
    </div>
  );
}

export default Navigation;
