import React from 'react';
import './App.css';
import Navigation from "../Navigation/";
import Routes from "../Routes";

function App() {
  return (
    <div className="Home">
      <Navigation />
      <div>
        <h1>Welcome to Shoply!</h1>
        <h5>We take care of some of your shopping needs! </h5>
        <h5>¯\_( ͠° ͟ʖ °͠ )_/¯</h5>
        < Routes />
      </div>
    </div>
  );
}

export default App;
