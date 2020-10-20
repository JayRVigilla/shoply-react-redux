import React from 'react';
import './App.css';
import Navigation from "../Navigation/";
import Routes from "../Routes";

function App() {
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
