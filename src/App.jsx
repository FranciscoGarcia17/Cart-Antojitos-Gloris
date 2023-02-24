import React from "react";
import "./App.css";
import "./index.css"
import Home from "./componentes/Home";
import Cart from "./componentes/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <div className="App">
        <CartProvider>
          <Home />
          <Cart />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
