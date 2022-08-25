import React from "react";
import './shop.styles.css';
import CategoryPage from "../../components/category-page/category-page.component";
import { Route, Routes } from "react-router-dom";
import CategoriesList from "../../components/categories-list/categories-list.component";
const Shop = () => {
  /*const {categoriesMap} = useContext(CategoriesContext);
  return (
    <div>
      <div>
        {
          Object.keys(categoriesMap).map(name => {
            return (<CategoryPage category={categoriesMap[name]} />)
          })
        }
      </div>
    </div>
  )
  */
        return (<Routes>
          <Route index element={<CategoriesList/>} />
          <Route path=":category/*" element={<CategoryPage />} />
        </Routes>)
}

export default Shop;
