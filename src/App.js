import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/TopMenu";

import Products from "./pages/Products";

import { CartProvider } from "./contexts/Cart";

function Home() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="container">
          <TopMenu />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
