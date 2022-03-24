import {React, createContext, useState} from "react";


export const ShopContext = createContext();


export default function ShopContextProvider ({children}){


    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [id, setId] = useState(0);
    const [cart, setCart] = useState([]);

    const loadProducts = array => setProducts([...array]);
    const productsByCategory = string => setCategory("" + string);
    const productsByBrand = str => setBrand("" + str);
    const productsId = number => setId(0 + number);
    const addToCart = item => setCart([...cart,item])
         
    

    console.log("context", products);
    console.log(category);
    console.log(brand);
    console.log("ID", id);
    console.log("CART", cart);

    return (
        <ShopContext.Provider value={{products, category, brand, id, cart, loadProducts, productsByCategory, productsByBrand, productsId, addToCart}} >
            {children}
        </ShopContext.Provider>
    )
}