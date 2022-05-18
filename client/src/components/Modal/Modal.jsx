import React, {useContext} from "react";
import ReactDom from "react-dom"
import "../Modal/Modal.css";
import { ShopContext } from "../Context";

export default function Modal() {

    const { products } = useContext(ShopContext);

    if (products.length !== 0) return null


    return ReactDom.createPortal(

        <div className="modalContainer">
            <h1>Loading</h1>
        </div>,

    document.getElementById('portal')
    )
}