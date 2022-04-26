import { React, createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [id, setId] = useState(0);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState("1");
  const [cartInfo, setCartInfo] = useState(false);
  

  
  
  const loadProducts = (array) => setProducts([...array]);
  const productsByCategory = (string) => setCategory("" + string);
  const productsByBrand = (str) => setBrand("" + str);
  const productsId = (number) => setId(0 + number);



  const addToCart = (item) => {

    const includes = cart.some((element) => element.id === item.id)
  


    if (!includes) {
      setCart([...cart, item]);
    
      item.quantity = "1";
      setCartInfo(false)

      
      
    }

    else if (includes) {

     setCartInfo(true)
    }

 

   
  };

  console.log("context", products);
  console.log(category);
  console.log(brand);
  console.log("ID", id);
  console.log("CART", cart);

  return (
    <ShopContext.Provider
      value={{
        products,
        category,
        brand,
        id,
        cart,
        quantity,
        cartInfo,
        setCartInfo,
        setQuantity,
        loadProducts,
        productsByCategory,
        productsByBrand,
        productsId,
        addToCart,
        setCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
