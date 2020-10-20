import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/";
import ProductDetail from "./Products/ProductDetail";
import ProductList from './Products/ProductList/';


/** */
function Routes() {
  return (
    <Switch>

      <Route exact path="/">
        <ProductList />
      </Route>

      <Route exact path="/cart">
        <ShoppingCart />
      </Route>

      <Route exact path="/products/:id">
        <ProductDetail />
      </Route>

      <Redirect to="/" />

    </Switch>
  );
}

export default Routes;
