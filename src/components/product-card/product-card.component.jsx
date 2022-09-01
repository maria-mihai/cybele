import React from "react";
import './product-card.styles.css';
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ( props) => {
    const [alertVisible, setAlertVisible] = useState(false);
    const {id, name, price, images} = props.product;
    const {addItemToCart} = useContext(CartContext);
    const addCartItem = () => {
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        },2000);
        addItemToCart(props.product);
    }
    const closeAlert = () => {
        setAlertVisible(false);
    }
    return <div className="product-container" key={id}>
        {alertVisible && <div className="productAddedAlert"><p>Product added to cart.</p>
        <p onClick={closeAlert}>X</p></div>}
        <img src={images[0]} className="productImage" alt="potted plant"/>
        <button className="productButton" onClick={addCartItem}>ADD TO CART</button>
        <div className="namePricePair">
            <span onClick={props.onProductClicked} className="productName">{name}</span>
            <span className="productPrice">€{price-0.01}</span>
        </div>
    </div>
}

export default ProductCard;