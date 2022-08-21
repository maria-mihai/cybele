import React from "react";
import CategoriesList from "../../components/categories-list/categories-list.component";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const {products} = useContext(ProductsContext);
  return (<div className="products-container">
  {
    products.map( ({id,name, price, imageUrl}) => {
      return (<ProductCard id={id} name={name} price={price} imgSource={imageUrl} /> )
    })
  }
  </div>)
  /*const categories = [
    {
      "id": 1,
      "title": "CACTUSES",
      "imgPath": 'https://i.imgur.com/rNEEAz6.png'
    },
    {
      "id": 2,
      "title": "PHILODENDRONS",
      "imgPath": 'https://i.imgur.com/3pPKroJ.png'
    },
    {
      "id": 3,
      "title": "SUCCULENTS",
      "imgPath": 'https://i.imgur.com/VYFGMWr.png'
    }
  ];
  return ( 
    <CategoriesList categories={categories}></CategoriesList>
  )*/
}

export default Shop;
