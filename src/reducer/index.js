import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_POKEMON,
} from "../actions/actionTypes";
import data from "../data.json";
import axios from 'axios'

const INITIAL_STATE = {
  cartContents: {}, // {product: count,...}
  mons: [],
  inventory: data.products
};

function reducer(state = INITIAL_STATE, action) {
  // const cartCopy = { ...state.cartContents };

  switch (action.type) {
    // get all pokemon
    case GET_ALL_POKEMON: {
      const monsCopy = { ...state.mons };
      return { ...state, mons: monsCopy, }
    }


    // action: type, id
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartContents };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1; // value @ cartCopy key "action.id" is now created or incremented
      return { ...state, cartContents: cartCopy, }
    }

    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cartContents };

      if (!cartCopy[action.id]) return state;
  cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id]; // decrement count or remove if count == 1, why show if decrementing makes it 0?
      }
      return { ...state, cartContents: cartCopy, }

    }
    default:
      return state
  }
}

export default reducer;