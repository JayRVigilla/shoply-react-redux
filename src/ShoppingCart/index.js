import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './ShoppingCart.css';

// TODO make this more components. form and invoice
// cartContents: {undefined: 1}... so i'm not grabbing id?
/** */
function ShoppingCart() {
  const [discountCode, setDiscountCode] = useState("");
  // const [cartItems, setCartItems] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  const cartItems = useSelector(store => store.cartContents, shallowEqual)
  const [cartTotal, setCartTotal] = useState('');

// TODO: useEffect to render cart data
// useEffect(function () {
//   function cartContentsFromStore() {
//     const cart = useSelector(store => store.cartContents, shallowEqual)
//     setCartItems(cart)
//   }
//   if (isLoading) cartContentsFromStore();
// }, [cartItems, isLoading])

  console.log('*****\n\n Value of cartItems in ShoppingCart', cartItems, '\n\n *****')
  const cartRows = () => {
    Object.keys(cartItems).map(id => (
      <tr>
        <td>{id.name}bobo</td>
        <td></td>
        <td>{[id]}</td>
        <td></td>
        <td></td>
      </tr>))
  }

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
      <h2>In the shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Item SubTotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartRows()}
        </tbody>
        {// dynamically add table rows from cart above?
        }</table>

      <p>{`Total: ${cartTotal}`}</p>

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
