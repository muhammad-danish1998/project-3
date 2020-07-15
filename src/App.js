import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { ProductsContextProvider } from "./Global/ProductsContext";
import { CartContextProvider } from "./Global/CartContext";
import { ImgCard } from "./ImgCard";
import './App.css';

function App() {
  return (
    <>
      <ProductsContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
          <Route  path='/' exact component={ImgCard} />
          <Route  path='/cart' exact component={Cart} />
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>

    </>
  );
}

export default App;
