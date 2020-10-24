import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './ShoppingCart.css';
import DiscountForm from './DiscountForm'

// TODO make this more components. form and invoice
// cartContents: {undefined: 1}... so i'm not grabbing id?
/** */
function ShoppingCart() {
  const [cartItems, setCartItems] = useState({});
  const { cartContents, inventory } = useSelector(store => store, shallowEqual)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function updateCart() {
      setCartItems(cartContents)
      const subTotal = (x) => inventory[x].price * cartItems[x]
      let cartKeys = Object.keys(cartItems)

      let cTotal = cartKeys.length > 0
        ? cartKeys.reduce((a, b) => a + parseFloat(subTotal(b)), 0)
        : 0

      setTotal(cTotal)
    }
    updateCart()
    }, [cartContents, cartItems, inventory])

  const cartRows =
    Object.keys(cartItems).map(id => (
      <tr key={id}>
        <td>{inventory[id].name}</td>
        <td>${inventory[id].price}</td>
        <td>{cartItems[id]}</td>
        <td>${inventory[id].price * cartItems[id]}</td>
        <td></td>
      </tr>
    ))


  // use state.cartContents as data
  return (
    <div className="ShoppingCart">
      <table className="cartlist">
        <caption>Your shopping Cart</caption>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>Actions</th>
          </tr>
        <tbody>
          {cartRows}
        </tbody>
      </table>

      <p>Total: ${total}</p>
      <DiscountForm />
    </div>
  );
}

export default ShoppingCart;
