import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
    selected: false,
    setSelected: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

const addCartItem = (cartItems, productToAdd) => {
    const existingItem = cartItems.find( (cartItem) => {return cartItem.id === productToAdd.id});
    if (existingItem) {
        return cartItems.map( (item) => {
            return item.id === productToAdd.id? {...productToAdd, amount: item.amount + 1} : item
        })

    }
    return [...cartItems, {...productToAdd, amount: 1}];
}

export const CartProvider = ({children}) => {
    const [selected, setSelected] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product));
    }
    const value = {selected, setSelected, addItemToCart, cartItems, setCartItems};
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}