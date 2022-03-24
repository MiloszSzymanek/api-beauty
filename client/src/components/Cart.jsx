import React from "react";
import { useContext } from "react";



export default function Cart(){

    const { products, cart}

    return (
        <div className="cartContainer">
            {cart.filter( i => <div></div>)}
        </div>
    )
}