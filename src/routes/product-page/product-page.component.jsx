import React, { useState, useContext} from "react";
import { CartContext } from "../../contexts/cart.context";
import './product-page.styles.css';
const ProductPage = (props) => {
    const product = props.product;
    const {name, botanicalName, description, price, images} = product;
    const [crntImage, setCrntImage] = useState(0);
    const nextImage = () => {
        setCrntImage((crntImage + 1)% images.length);
    }
    const prevImage = () => {
        setCrntImage((crntImage + images.length - 1)% images.length);
    }
    const {addItemToCart} = useContext(CartContext);
    const addCartItem = () => {
        addItemToCart(props.product);
    }
    return (
        <div className="product-page">
            <div className="product-page-image">
                <img src={images[crntImage]} alt="close up of product"/>
                <h1><span className="pr-p-lt" onClick={prevImage}>&lt;</span> <span className="pr-p-gt" onClick={nextImage}>&gt;</span></h1>
            </div>
            <div className="product-page-text">
                <h2>{name}</h2>
                <p>{botanicalName}</p>
                <p>{description}</p>
                <p>€{price-0.01}</p>
                <button onClick={addCartItem}>ADD TO CART</button>
            </div>
            <span onClick={props.onClickedX} className="x-button">X</span>
         </div>)
}

export default ProductPage;