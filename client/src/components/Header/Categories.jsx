import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context";

export default function Categories(props) {
  const { products, productsByCategory } = useContext(ShopContext);


  const [categoriesArr, setCategoriesArr] = useState([]);

  useEffect(() => {

    const newArr = [...categoriesArr]

    for (let i = 0; i < products.length; i++) {
    if (!newArr.includes(products[i].product_type)) {
      newArr.push(products[i].product_type);
    }
    setCategoriesArr([...newArr])
  }

  }, [props.catDrop] )
  



  

 

  return (
    <ul className={props.catDrop ? "categoriesShow" : "categories" } style={props.styling} >
      {categoriesArr.map((i) => (
        <li className="category" onClick={() => productsByCategory(i) }> 
          <NavLink
            exact
            className="openCategory"
            activeClassName="activeCategoryLink"
            to="/OneCategory"
            onClick={() => props.setCat(false)}
          >{i.replaceAll("_", " ")}
          </NavLink>
        </li>
      ))}
    </ul>
  );

 

}
