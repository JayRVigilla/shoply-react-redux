import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import getAllPokemonAPI from './../../actions/actionCreators';
import './ProductList.css';
import ProductCard from '../ProductCard';

/** */
function ProductList() {
  //shallow equal: comparisons on OBJ (like state.inventory) are ===, therefore always flase
  const products = useSelector(store => store.inventory, shallowEqual);
  const productIDs = Object.keys(products);
  // const mons = useSelector(store => store.mons, shallowEqual);

  // for pokeAPI
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const image_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'  // + idNumber.png

  useEffect(function () {
    async function fetchMons() {
      await dispatch(getAllPokemonAPI());
      setIsLoading(false);
    }
    if (isLoading) fetchMons();
  }, [dispatch, isLoading])

  const storeMons = useSelector(store => store.mons,);
console.log('*****\n\n Value of storeMons in ProductList', storeMons, '\n\n *****')
  function stripID(url) {
    let p = url.split('/')
    return parseInt(p[p.length - 2]);
  }

  return (
    <div className="ProductList">
        {productIDs.map(id =>( //key should be each key from store.inventory AKA products
            <ProductCard
            key={id}
            name={products[id].name}
            id={id}
            image_url={products[id].image_url}
            description={products[id].description} />
          ))}

      <div>
        <h2>poke API</h2>
        {/* {mons.results.map(mon =>( //key should be each key from store.inventory AKA products
            <ProductCard
            key={stripID(mon.url)}
            name={mon.name}
            id={stripID(mon.url)}
            image_url={`${image_url}/${stripID(mon.url)}.png`}
            description='filler description' />
        ))} */}
      </div>

    </div>
  );
}

export default ProductList;
