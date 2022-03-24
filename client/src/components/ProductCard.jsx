import { useContext } from "react";
import React from "react";
import { ShopContext } from "./Context";
import "../styles/productCard.css";

export default function ProductCard() {
  const { products, id, addToCart } = useContext(ShopContext);

  return (
    <div className="productMain">
      {products
        .filter((i) => i.id === id)
        .map((item) => (
          <div className="productContainer">
            <p className="path">
              {item.product_type} / {item.brand} / {item.name}{" "}
            </p>
            <img
              className="productImage"
              src={item.api_featured_image}
              alt=""
            />
            <div className="colors">{item.product_colors.map(i => <div className="colorContainer"> <div className="oneColor" style={{backgroundColor: i.hex_value}}></div></div>)}</div>
            <div className="productName"><h2>{item.name}</h2>
            <h3>{item.brand}</h3></div>
            <p className="productDescription"><h3>Description</h3>{item.description}</p>
            <p className="rating">Users Rating {0 + item.rating}/5</p>
            <p className="productPrice">{item.price} $</p>
            <div className="buttons"><button className="ToCart" type="submit" onClick={() => addToCart(item )}>
              Add To Cart
            </button>
            <button className="buyButton" type="submit">
              Buy Now
            </button></div>
          </div>
        ))}
    </div>
  );
}
