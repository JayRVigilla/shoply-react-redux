import React, { useState } from 'react'

function DiscountForm() {
  const [discountCode, setDiscountCode] = useState("");


  const handleChange = evt => {
    setDiscountCode(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setDiscountCode("")
  }

  return (
    <div>
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
  )
}

export default DiscountForm;