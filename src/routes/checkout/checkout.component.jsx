import React, {useContext} from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.css';

const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    const compare = (a, b) => {
        return a.id - b.id;
    }
    const sortedItems = cartItems.sort(compare);
    const total = cartItems.reduce( (accum, crntItem) => accum + crntItem.price * crntItem.amount, 0);
    return (
        <div className="checkout">
            <h1>CHECKOUT</h1>
            { total > 0? 
            <div className="checkout-items">
                <div className="checkout-items-container">
                    {sortedItems.map((item) => <CheckoutItem item={item} />)}
                </div> 
            <hr/>
            <p className="checkout-total">TOTAL: {total} EUR</p>
        </div> : <p>It looks like there are no products in your shopping cart!</p>}
            
        </div>
    )
}

export default Checkout;