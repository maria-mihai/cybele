import React from "react";
import './cart-item.styles.css';
const CartItem = ({item}) => {
    const {id, name, images, price, amount} = item;
    return <div className="cart-item-container">
        <img src={images[0]} className="cart-item-image"/>
        <div className="cart-item-text-container">
            <h2 className="cart-item-name">{name}</h2>
            <p>{price} EUR x {amount}</p>
        </div>
    </div>
}

export default CartItem;