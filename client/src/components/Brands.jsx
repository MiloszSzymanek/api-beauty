import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./Context";

export default function Brands(props) {
  const { products, productsByBrand, brand } = useContext(ShopContext);

  const brandArr = [];

  for (let i = 0; i < products.length; i++) {
    if (!brandArr.includes(products[i].brand)) {
      brandArr.push(products[i].brand);
    }
  }

  

  return (
    <ul className="brands" style={props.styling}>
      {brandArr.map(i => (
        <li className="brand" onClick={() => productsByBrand(i) }> 
          <NavLink
            exact
            className="brandLink"
            activeClassName="activeBrandLink"
            to="/OneBrand"
          >{i}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
