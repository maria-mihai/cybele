import React, {useContext} from 'react';
import { ReactComponent as ShoppingBag } from '../../shopping-bag.svg';
import './cart-icon.styles.css';
import { CartContext } from '../../contexts/cart.context';
const CartIcon = () => {
    const {cartItems} = useContext(CartContext);
    const itemCount = cartItems.reduce( (accumulator, currentItem) => accumulator + currentItem.amount, 0);
    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon'/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

export default CartIcon;