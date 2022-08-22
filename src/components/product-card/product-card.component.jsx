import React from "react";
import './product-card.styles.css';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ( {product}) => {
    const {id, name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addCartItem = () => {
        console.log('adding item!');
        addItemToCart(product);
    }
    return <div className="product-container" key={id}>
        <img src={imageUrl} className="productImage" />
        <button className="productButton" onClick={addCartItem}>ADD TO CART</button>
        <div className="namePricePair">
            <span className="productName">{name}</span>
            <span className="productPrice">{price}</span>
        </div>
    </div>
}

export default ProductCard;