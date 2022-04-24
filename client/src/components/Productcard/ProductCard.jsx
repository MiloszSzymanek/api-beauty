import { useContext, useState, useEffect } from "react";
import React from "react";
import { ShopContext } from "../Context";
import "./ProductCard.css";
import { GrClose } from "react-icons/gr";

export default function ProductCard() {
  const { products, id, addToCart, cartInfo, setCartInfo } = useContext(ShopContext);

useEffect(() => {
  setCartInfo(false);
}, [])

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
            <div className="colors">
              {item.product_colors.map((i) => (
                <div className="colorContainer">
                  {" "}
                  <div
                    className="oneColor"
                    style={{ backgroundColor: i.hex_value }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="productName">
              <h2>{item.name}</h2>
              <h3>{item.brand}</h3>
            </div>
            <p className="productDescription">
              <h3>Description</h3>
              {item.description}
            </p>
            <p className="rating">Users Rating {0 + item.rating}/5</p>
            <p className="productPrice">{Number(item.price).toFixed(2).toString()} $</p>
            <div className="quantity"></div>
            <div className="buttons">
              <button
                className="ToCart"
                type="submit"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
               {cartInfo && <div className="warning"><h3>Product is already in the cart</h3> <GrClose
          className="closeIcon"
          onClick={() => {setCartInfo(false)
            
          }}
        /></div>}
            </div> 
            
          </div>
        ))}
    </div>
  );
}
