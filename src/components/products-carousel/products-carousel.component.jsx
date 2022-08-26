import React, {useState} from "react";
import ProductCard from "../product-card/product-card.component";
import './products-carousel.styles.css';
const ProductsCarousel = (props) => {
    const productsToDisplay = props.productsToDisplay;
    const idPrefix = props.idPrefix;
    const [clickedDot, setClickedDot] = useState(idPrefix+'0');
    var  i = -1;
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
            return (<a id={idPrefix+i} href={'#'+product.id} className={clickedDot === idPrefix+i ? "active-dot" : "scroll-dot"} onClick={dotClicked}>.</a>)
        })}
        </div>
    </div>
}

export default ProductsCarousel;