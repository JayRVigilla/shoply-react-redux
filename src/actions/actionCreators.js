import axios from 'axios'
import {
  addToCart,
  removeFromCart,
  fetchAllPokemon,
  handleError,
} from './actions'

const BASE_API = 'https://pokeapi.co/api/v2/pokemon'
const image_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'  // + idNumber.png

export default function getAllPokemonAPI() {
  return async function (dispatch) {
    try {
      const mons = await axios.get(`${BASE_API}`);
      dispatch(fetchAllPokemon(mons.data))
    }
    catch (err) {
      dispatch(handleError(err.response));
    }
  };
}