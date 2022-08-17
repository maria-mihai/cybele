import "./category.styles.css";
import React from "react";
const Category = ({category}) => {
    const {title, imgPath} = category;
    return (
    <div className='category-container'>
          <div className="text-container">
            <img src={imgPath} className="category-img"/>  
            <h2 className="category-title">{title}</h2>
            <p>Shop Now!</p>
            </div>
          </div>
    )
};

export default Category;