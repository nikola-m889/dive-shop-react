import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Modal from "./components/Modal";
import Cart from "./Cart/Cart";
import Masks from "./pages/Masks";
import Fins from "./pages/Fins";
import Regulators from "./pages/Regulators";
import Suits from "./pages/Suits";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:slug" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/masks" component={Masks} />
        <Route exact path="/fins" component={Fins} />
        <Route exact path="/regulators" component={Regulators} />
        <Route exact path="/suits" component={Suits} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Modal />
      <Footer />
    </>
  );
}

export default App;
