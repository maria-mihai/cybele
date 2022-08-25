import "./category.styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
const Category = ({category}) => {
    const {name, imgPath, categoryName} = category;
    const navigate = useNavigate();
    const navigateHandler = () => {
      navigate('/shop/'+categoryName);
    }
    return (
    <div className='category-container' onClick={navigateHandler}>
            <img src={imgPath} className="category-img"/>
            <div className="text-container">
            <h2 className="category-title">{name}</h2>
            <p>Shop Now!</p>
            </div> 
          </div>
    )
};

export default Category;