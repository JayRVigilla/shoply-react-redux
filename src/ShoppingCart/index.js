import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './ShoppingCart.css';

// TODO make this more components. form and invoice
// cartContents: {undefined: 1}... so i'm not grabbing id?
/** */
function ShoppingCart() {
  const [discountCode, setDiscountCode] = useState("");
  const [cartItems, setCartItems] = useState({});
  const { cartContents, inventory } = useSelector(store => store, shallowEqual)
  const total = 5;

  // setCartItems(cartContents);
  console.log('*****\n\n Value of inventory in cart', inventory, '\n\n *****')
  console.log('*****\n\n Value of cartItems in cart', cartItems, '\n\n *****')
  useEffect(() => {
    function updateCart(){
      setCartItems(cartContents)
    }
    updateCart()
    }, [cartContents])

  const cartRows =
    Object.keys(cartItems).map(id => (
        <tr>
        <td>{inventory[id].name}</td>
        <td>{inventory[id].price}</td>
        <td>{cartItems[id]}</td>
        <td>{inventory[id].price * cartItems[id]}</td>
        <td>actions?</td>
      </tr>
    ))

  //create "cart rows" that dynamically makes this from "cart"?

  const handleChange = evt => {
    setDiscountCode(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDiscountCode("")
  }

  // use state.cartContents as data
  return (
    <div className="ShoppingCart">
      <h2>Your shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartRows}
        </tbody>
      </table>

      <p>Total: ${total}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="discoutCode">Discount:</label>
        <input type="text"
          name="discountCode"
          value={discountCode}
          placeholder=""
          onChange={handleChange}
        ></input>
        <button>Apply Discount</button>
      </form>

    </div>
  );
}

export default ShoppingCart;
