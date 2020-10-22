import axios from 'axios'
import {
  addToCart,
  removeFromCart,
  fetchAllPokemon,
  handleError,
} from './actions'

const BASE_API = 'https://pokeapi.co/api/v2/pokemon'

export default function getAllPokemonAPI() {
  return async function (dispatch) {
    try {
      const mons = await (await axios.get(`${BASE_API}`)).data.results;
      dispatch(fetchAllPokemon(mons))
    }
    catch (err) {
      dispatch(handleError(err.response));
    }
  };
}