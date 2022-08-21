import React from "react";
import './product-card.styles.css';

const ProductCard = ( {id, name, price, imgSource}) => {
    return <div className="product-container" key={id}>
        <img src={imgSource} className="productImage" />
        <button className="productButton">ADD TO CART</button>
        <div className="namePricePair">
            <span className="productName">{name}</span>
            <span className="productPrice">{price}</span>
        </div>
    </div>
}

export default ProductCard;