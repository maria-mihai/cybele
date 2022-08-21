import React from 'react';
import { ReactComponent as ShoppingBag } from '../../shopping-bag.svg';
import './cart-icon.styles.css';
const CartIcon = () => {
    return (
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;