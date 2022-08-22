import React from "react";
import './dropdown.styles.css';
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
const DropDown = () => {
    const navigate = useNavigate();
    const {cartItems, setSelected} = useContext(CartContext);
    const goToCheckoutHandler = () => {
        setSelected(false);
        navigate('/checkout');
    }
    let totalPrice = 0;
    const calcTotal = (item) => {
        totalPrice += item.price * item.amount;
    }
    cartItems.forEach(calcTotal);
    return (<div className="dropdown">
        <div className="cart-items">
            {
                cartItems.map( (item) => <CartItem item={item} />)
            }
        </div>
        <p>TOTAL: {totalPrice} EUR</p>
        <button className="dropdown-button" onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </div>)
}
export default DropDown;