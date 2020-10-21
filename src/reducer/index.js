import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_POKEMON,
} from "../actions/actionTypes";
import data from "../data.json";
import axios from 'axios'

const INITIAL_STATE = {
  cartContents: {}, // {product: count,...}
  mons: []
};

const BASE_API = 'https://pokeapi.co/api/v2/pokemon/'


function reducer(state = INITIAL_STATE, action) {
  // const cartCopy = { ...state.cartContents };

  switch (action.type) {
    // get all pokemon
    case GET_ALL_POKEMON: {
      const monsCopy = {...state.mons}
    }


    // action: type, id
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartContents };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1; // value @ cartCopy key "action.id" is now created or incremented
      console.log(`\n\n\n The value of newCart is `, { ...state, cartContents: cartCopy, });
      return { ...state, cartContents: cartCopy, }
    }

    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cartContents };

      if (!cartCopy[action.id]) return state;
  cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id]; // decrement count or remove if count == 1, why show if decrementing makes it 0?
      }
      console.log(`\n\n\n The value of newCart is `, { ...state, cartContents: cartCopy, });
      return { ...state, cartContents: cartCopy, }

    }
    default:
      return state
  }
}

export default reducer;