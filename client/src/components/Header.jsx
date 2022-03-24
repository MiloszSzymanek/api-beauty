import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./Context";
import Categories from "./Categories";
import Brands from "./Brands";
import "../styles/Header.css";

export default function Header() {
  const [catSubmenu, setCatSubmenu] = useState(0);
  const [brandSubmenu, setBrandSubmenu] = useState(0);

  const { products } = useContext(ShopContext);

  const category = [];

  for (let i = 0; i < products.length; i++) {
    if (!category.includes(products[i].product_type)) {
      category.push(products[i].product_type);
    }
  }

  const catSubmenuStyle = { transform: `translateY(${catSubmenu}px)` };
  const brandSubmenuStyle = { transform: `translateY(${brandSubmenu}px)` };

  return (<header>
    <ul className="navBar">

        <li
        className="navbarLink"><NavLink to="/" exact className="homeButton" activeClassName="homeButtonActive">Home</NavLink></li>
      <li
        className="navbarLink"
        onMouseOver={() => setCatSubmenu(10)}
        onMouseOut={() => setCatSubmenu(-200)}
      >
        Category
        <Categories styling={catSubmenuStyle} />
      </li>
      <li
        className="navbarLink"
        onMouseOver={() => setBrandSubmenu(10)}
        onMouseOut={() => setBrandSubmenu(-510)}
      >
        Brand
        <Brands styling={brandSubmenuStyle} />
      </li>
    </ul>
    </header>
  );
}
