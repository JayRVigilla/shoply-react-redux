import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './ShoppingCart.css';

// TODO make this more components. form and invoice
// cartContents: {undefined: 1}... so i'm not grabbing id?
/** */
function ShoppingCart() {
  const [discountCode, setDiscountCode] = useState("");

  // const cart = useSelector(state => state.cartContents, shallowEqual)

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

        </tbody>
        {// dynamically add table rows from cart above?}
        }</table>

      <p>Total: $TotalPriceGoesHere</p>

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
