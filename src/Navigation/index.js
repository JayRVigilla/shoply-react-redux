import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';


/** */
function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/">Shoply</Link>
      <div className="cart icon">
        <p> Count of Items and Total Go Here</p>
        <Link to="/cart"><i class="fas fa-shopping-cart">Cart</i></Link>
      </div>
    </div>
  );
}

export default Navigation;
