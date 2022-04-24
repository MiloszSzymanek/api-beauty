import React from "react";
import { ShopContext } from "../Context";
import { useContext } from "react";
import "./FilteredProducts.css";
import { NavLink } from "react-router-dom";

export default function OneCategory(props) {
  const { products, category, productsId } = useContext(ShopContext);
  console.log("products");

  return (
    <div className="oneCategory">
      {products
        .filter((i) => i.product_type === category)
        .map((item) => (
          <NavLink
            exact
            className="productLink"
            activeClassName="activeProductLink"
            to="./ProductCard"
          >
            <div className="product" onClick={() => productsId(item.id)}>
              {" "}
              <img src={item.api_featured_image} alt="" />
              <h2>{item.brand}</h2>
              <p>{item.name}</p>
              <p>{Number(item.price).toFixed(2).toString()} $</p>{" "}
            </div>
          </NavLink>
        ))}
    </div>
  );
}
