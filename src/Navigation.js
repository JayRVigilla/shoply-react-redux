import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';


/** */
function Navigation() {
  return (
    <ul className="Navigation">
      <li><Link to="/">Shoply</Link></li>
      <p> Count of Items and Total Go Here</p>
      <li><Link to="/cart">Cart</Link></li>
    </ul>
  );
}

export default Navigation;
