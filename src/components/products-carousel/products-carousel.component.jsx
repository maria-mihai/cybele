import React, {useState} from "react";
import ProductCard from "../product-card/product-card.component";
import './products-carousel.styles.css';
const ProductsCarousel = ({productsToDisplay}) => {
    const n = productsToDisplay.length;
    const [clickedDot, setClickedDot] = useState('0');
    let active=[true];
    for (var i = 1; i < n; i++) {
        active.push(false);
    }
    i = -1;
    const dotClicked = (event) => {
        setClickedDot(event.target.id);
    }
    return <div className="carousel-container"><div className="carousel">
        {productsToDisplay.map( (product) => {
            return <div className="carousel-item" ><div id={product["id"]}></div><ProductCard product={product} onProductClicked={null} /></div>
        })}
        
    </div>
    <div className="dots-container">
        {
        productsToDisplay.map( (product) => {
            i++;
            console.log(i);
            return (<a id={""+i} href={'#'+product.id} className={clickedDot === ""+i ? "active-dot" : "scroll-dot"} onClick={dotClicked}>.</a>)
        })}
        </div>
    </div>
}

export default ProductsCarousel;