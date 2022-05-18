import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context";

export default function Brands(props) {
  const { products, productsByBrand, brand } = useContext(ShopContext);

  const [brandArr, setBrandArr] = useState([])

  useEffect(() => {

    const newArr = [...brandArr]

    for (let i = 0; i < products.length; i++) {
    if (!newArr.includes(products[i].brand)) {
      newArr.push(products[i].brand);
    }
    setBrandArr([...newArr])
  }

  }, [props.bDrop] )
  

  

  return (
    <ul className={props.bDrop ? "brandsShow" : "brands" } style={props.styling}>
      {brandArr.map(i => (
        <li className="brand" onClick={() => productsByBrand(i) }> 
          <NavLink
            exact
            className="openBrand"
            activeClassName="activeBrandLink"
            to="/OneBrand"
            onClick={() => props.setBDrop(false)}
          >{i}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
