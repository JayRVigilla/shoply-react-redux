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

  // for pokeAPI
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchMons() {
      await dispatch(getAllPokemonAPI());
      setIsLoading(false);
    }
    if (isLoading) fetchMons();
  }, [dispatch, isLoading])


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
        {productIDs.map(id =>( //key should be each key from store.inventory AKA products
            <ProductCard
            key={id}
            name={products[id].name}
            id={id}
            image_url={products[id].image_url}
            description={products[id].description} />
        ))}
      </div>

    </div>
  );
}

export default ProductList;
