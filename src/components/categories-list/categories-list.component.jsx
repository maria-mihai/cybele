import React from "react";
import './categories-list.styles.css';
import Category from "../category/category.component";
const CategoriesList = ({categories}) => {
    return (
    <div className="categories-container">
      {categories.map( (category) => (
        <Category key={category.id} category={category}></Category>
      )
      )
      }
  </div>)
}

export default CategoriesList;