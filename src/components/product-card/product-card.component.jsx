import React from "react";
import './product-card.styles.css';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ( props) => {
    const {id, name, price, images} = props.product;
    const {addItemToCart} = useContext(CartContext);
    const addCartItem = () => {
        addItemToCart(props.product);
    }
    return <div className="product-container" key={id}>
        <img src={images[0]} className="productImage" />
        <button className="productButton" onClick={addCartItem}>ADD TO CART</button>
        <div className="namePricePair">
            <span onClick={props.onProductClicked} className="productName">{name}</span>
            <span className="productPrice">€{price-0.01}</span>
        </div>
    </div>
}

export default ProductCard;