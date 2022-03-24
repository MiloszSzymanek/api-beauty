import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./Context";

export default function Categories(props) {
  const { products, productsByCategory } = useContext(ShopContext);

  const categoriesArr = [];

  for (let i = 0; i < products.length; i++) {
    if (!categoriesArr.includes(products[i].product_type)) {
      categoriesArr.push(products[i].product_type);
    }
  }


 

  return (
    <ul className="categories" style={props.styling} >
      {categoriesArr.map((i) => (
        <li className="category" onClick={() => productsByCategory(i) }> 
          <NavLink
            exact
            className="categoryLink"
            activeClassName="activeCategoryLink"
            to="/OneCategory"
          >{i.replaceAll("_", " ")}
          </NavLink>
        </li>
      ))}
    </ul>
  );

 

}
