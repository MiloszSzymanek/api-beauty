import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { ShopContext } from "../Context";

import { GrClose } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import Cookies from 'js-cookie';

export default function Cart(props) {
  const { cart, setCart, setQuantity } = useContext(ShopContext);

  useEffect(() => {
    const data = window.localStorage.getItem("cartItems");
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  function updateLocalStorage() {
    window.localStorage.removeItem("cartItems");

    window.localStorage.setItem("cartItems", JSON.stringify(cart));
    setCart([...cart]);
  }

  function deleteCartItem(item) {
    cart.splice(cart.indexOf(item), 1);

    updateLocalStorage();
  }

  function editQuantity(item, e) {
    item.quantity = e.target.value;

    updateLocalStorage();
  }

  function getTotal() {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += Number(cart[i].price) * Number(cart[i].quantity);
    }

    return total.toFixed(2);
  }

  


  return (
    <div
      className={
        props.cartState === true ? "showCartContainer" : "cartContainer"
      }
    >
      <div className="closeCartDiv">
        <GrClose
          className="closeIcon"
          onClick={() => {
            props.closeCart(false);
          }}
        />{" "}
      </div>
      {cart.length === 0 ? (
        <h3 className="infoEmpty">The shopping cart is empty</h3>
      ) : (
        <div className="itemsList">
          {cart.map((i) => (
            <div className="itemInCart">
              <img className="cartImage" src={i.api_featured_image} alt="" />
              <div className="cartTitle">
                <p className="itemName">{i.name}</p>
                <p className="itemBrand">{i.brand}</p>
                <div className="itemQuantity">
                  {" "}
                  <select
                    name="quantity"
                    id="quantity"
                    onChange={(e) => editQuantity(i, e)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <p className="itemPrice">
                {Number(i.price).toFixed(2).toString()} $
              </p>
              <div className="deleteItem">
                <RiDeleteBin6Line onClick={() => deleteCartItem(i)} />
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length === 0 ? (
        <div></div>
      ) : (
        <div className="totalPrice">
          <h3>Total Price</h3>
          <p>{getTotal()} ${" "}</p>
          <button className="buyButton" type="submit" >
            BUY
          </button>{" "}
        </div>
      )}
    </div>
  );
}
