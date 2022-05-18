import { React, useContext, useEffect } from "react";
import { ShopContext } from "./Context";
import axios from "axios";
import "../styles/App.css";
import Header from "../components/Header/Header";
import { Route, Switch } from "react-router-dom";
import OneCategory from "./FilteredProducts/OneCategory";
import OneBrand from "./FilteredProducts/OneBrand";
import Home from "./Home/Home";
import ProductCard from "./Productcard/ProductCard";
import Register from "./Register/Register";
import Modal from "./Modal/Modal";

function App() {
  const { loadProducts } = useContext(ShopContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://makeup-api.herokuapp.com/api/v1/products.json"
        );
        console.log("response is", response.data);

        loadProducts(response.data);
      } catch (error) {
        console.log("Get data ERROR:", error.message);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <Modal />

      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/OneCategory" exact component={OneCategory} />
        <Route path="/OneBrand" exact component={OneBrand} />
        <Route path="/ProductCard" exact component={ProductCard} /> 
        <Route path="/Register" exact component={Register} />
      </Switch>
    </div>
  );
}

export default App;
