import { ADD_CART, REMOVE_CART } from "./actionTypes"
import "./data.json";


const INITIAL_STATE = {
  cart: 
  {
    total: 0,
    products: //with counts of each now added
  }
  
  // NOTE FOR RETURNING FROM LUNCH:
  // this should be the value of products OBJ in 
  //data.json

// original 
  // cartCounts: 
  //   [
  //     {
  //       SKU: "2266b2d6-3d71-4356-8065-392f1fceab07",
  //       count: 0
  //     },

  //     {
  //       SKU: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
  //       count: 0
  //     },

  //     {
  //       SKU: "4260bf52-218a-480e-87ea-4ff42470ce98",
  //       count: 0
  //     },
  //     {
  //       SKU: "47314fa1-ae56-4eae-80be-af6691145951",
  //       count: 0
  //     },
  //     {
  //       SKU: "6a56c22f-2a85-4751-98a9-14e280fcecd8",
  //       count: 0
  //     }]


}

function shoplyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_CART:
      return { ...state, cart: [...state.cart, action.payload] }


    case REMOVE_CART:
      return { ...state, cart: state.cart.filter(product => product.id != action.paylod) }

    default:
      return state
  }
}

export default shoplyReducer