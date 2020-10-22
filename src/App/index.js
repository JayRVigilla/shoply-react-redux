import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getAllPokemonAPI from './../actions/actionCreators';
import './App.css';
import Navigation from "../Navigation/";
import Routes from "../Routes";

function App() {
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
    <div className="App">
      <Navigation />
      <div className="routes">
        < Routes />
      </div>
    </div>
  );
}

export default App;
