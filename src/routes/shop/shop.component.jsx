import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.css';
const Shop = () => {
  const {products} = useContext(ProductsContext);
  return (<div className="shop-container"><div className="products-container">
  {
    products.map( (product) => {
      return (<ProductCard product={product} /> )
    })
  }
  </div></div>)
  
}

export default Shop;
