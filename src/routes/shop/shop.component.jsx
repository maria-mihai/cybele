import React from "react";
import CategoriesList from "../../components/categories-list/categories-list.component";
const Shop = () => {
  const categories = [
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
  )
}

export default Shop;
