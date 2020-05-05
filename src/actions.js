import {ADD_CART, REMOVE_CART} from "./actionTypes"

export function addCart(){
  return{
    type: ADD_CART
  };
}

export function removeCart(){
  return{
    type: REMOVE_CART
  };
}