import React, {useContext} from "react";
import './categories-list.styles.css';
import Category from "../category/category.component";
import { CategoriesContext } from "../../contexts/categories.context";
const CategoriesList = ({categories}) => {
  const {categoriesMap} = useContext(CategoriesContext);
    return (
    <div className="categories-container">
      {
          Object.keys(categoriesMap).map(name => {
            return (<Category category={categoriesMap[name]} />)
          })
        }
  </div>)
}

export default CategoriesList;