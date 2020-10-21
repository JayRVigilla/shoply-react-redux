import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_POKEMON,
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

export function getAllPokemon(){
  return {
    type: GET_ALL_POKEMON
  }
};