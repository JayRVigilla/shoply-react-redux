import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_POKEMON,
  ERROR,
} from "./actionTypes"

export function addToCart(id){
  return{
    type: ADD_TO_CART,
    id
  };
}
export function removeFromCart(id){
  return{
    type: REMOVE_FROM_CART,
    id
  };
}

export function fetchAllPokemon(mons){
  return {
    type: GET_ALL_POKEMON,
    mons
  }
};

export function handleError(error) {
  return {
    type: ERROR,
    error
  };
}