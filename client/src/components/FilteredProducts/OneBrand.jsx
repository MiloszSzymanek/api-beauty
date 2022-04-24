import React from "react";
import { ShopContext } from "../Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./FilteredProducts.css";

export default function OneBrand(props) {
  const { products, brand, productsId } = useContext(ShopContext);
  console.log("products");

  return (
    <div className="oneBrand">
      {products
        .filter((i) => i.brand === brand)
        .map((item) => (
          <NavLink exact className="productLink" activeClassName="activeProductLink" to="./ProductCard" ><div className="product" onClick={() => productsId(item.id)}>
            {" "}
            <img src={item.api_featured_image} alt="" /> 
            <h2>{item.brand}</h2>
            <p>{item.name}</p>
            <p>{Number(item.price).toFixed(2).toString()} $</p>{" "}
          </div></NavLink>
        ))}
    </div>
  );
}
