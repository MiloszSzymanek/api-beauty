import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context";
import Categories from "./Categories";
import Brands from "./Brands";
import Logo from "../Logo/Logo";
import "../Header/Header.css";
import Cart from "../Cart/Cart";
import UserModal from "../UserModal/UserModal";

export default function Header() {
  const { products, cart } = useContext(ShopContext);

  const [categoriesDrop, setCategoriesDrop] = useState(false);
  const [brandDrop, setBrandDrop] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [userModal, setUserModal] = useState(false);
  
  
  const category = [];

  for (let i = 0; i < products.length; i++) {
    if (!category.includes(products[i].product_type)) {
      category.push(products[i].product_type);
    }
  }

  return (
    <header>
      <nav>
      <ul className="navBar">
        <li className="logoItem"><Logo /></li>
        <li className="homeLink">
          <NavLink to="/" exact className="homeLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className="categoryLink"
            onMouseEnter={() => setCategoriesDrop(true)}
            onMouseLeave={() => setCategoriesDrop(false)}
          >
            Categories
            <Categories catDrop={categoriesDrop} setCat={setCategoriesDrop} />
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to=""
            security=""
            className="brandLink"
            onMouseEnter={() => setBrandDrop(true)}
            onMouseLeave={() => setBrandDrop(false)}
          >
            Brands
            <Brands bDrop={brandDrop} setBDrop={setBrandDrop} />
          </NavLink>
        </li>

        <li>
          <div className="userIcon">
            <div className="openUser" onClick={() => setUserModal(true)}>  
            </div>
            <UserModal  modalState={userModal} closeModal={setUserModal}/>
          </div>
        </li>

        <li>
          <div className="cartIcon">
            <div className="openCart" onClick={() => setShowCart(true)}>
              {" "}
              {cart.length > 0 && (
                <div className="numberOfItemsInCart">
                  {cart.length.toString()}
                </div>
              )}
            </div>

            <Cart cartState={showCart} closeCart={setShowCart} />
            <div className="itemsInCart"></div>
          </div>
        </li>
        
      </ul>
    </nav>
    </header>
  );
}
