import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes"
import data from "./data.json";


const INITIAL_STATE = {
  cartContents: {}, // each key is a product with value of count
  inventory: data.products
}



function rootReducer(state = INITIAL_STATE, action) {
  const cartCopy = { ...state.cartContents };

  switch (action.type) {
    // action: type, id
    case ADD_TO_CART:
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1; // value @ cartCopy key "action.id" is now created or incremented
      console.log(`\n\n\n The value of newCart is `, { ...state, cartContents: cartCopy, });
      return { ...state, cartContents: cartCopy, }


    case REMOVE_FROM_CART:
      if (!cartCopy[action.id]) return;

      if (cartCopy[action.id] === 1) {
        delete cartCopy[action.id]; // decrement count or remove if count == 1, why show if decrementing makes it 0?
      } else {
        cartCopy[action.id]--;
      }
      return { ...state, cartContents: cartCopy, }


    default:
      return state
  }
}

export default rootReducer;