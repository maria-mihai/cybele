import React, {useContext} from "react";
import './checkout-item.styles.css';

import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({item}) => {
    const id = Math.floor(Math.random() * 20000)
    const {name, amount, price, images} = item;
    const {cartItems, setCartItems} = useContext(CartContext);
    const decrease = () => {
        const updatedItems = cartItems.filter((itm) => itm.id !== id);
        if (amount === 1) {
            setCartItems(updatedItems);
            return;
        }
        const updatedAmount = amount - 1;
        setCartItems([...updatedItems, {id, name, price, images, amount: updatedAmount} ]);
    }
    const increase = () => {
        const updatedItems = cartItems.filter((itm) => itm.id !== id);
        const updatedAmount = amount + 1;
        setCartItems([...updatedItems, {id, name, price, images, amount: updatedAmount} ]);

    }
    const remove = () => {
        const updatedItems = cartItems.filter((itm) => itm.id !== id);
        setCartItems(updatedItems);
    }
    return (<div className="checkout-item-container" key={id}>
        <img src={images} className="checkout-item-image" alt="close up of product"/>
        <h2>{name}</h2>
        <p>{price} EUR</p>
        <p className="checkout-amount"> <span className="greater-than" onClick={decrease}>&lt;</span> {amount} <span className="less-than" onClick={increase}>&gt;</span></p>
        <p onClick={remove} className="x">X</p>
    </div>)
}

export default CheckoutItem;