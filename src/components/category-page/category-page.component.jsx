import React, {useState, useEffect, useContext} from "react";
import ProductCard from "../product-card/product-card.component";
import './category-page.styles.css';
import { useParams} from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductPage from "../../routes/product-page/product-page.component";

const CategoryPage = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    const [productPageToggled, toggleProductPage] = useState(false);
    const [clickedProduct, setClickedProduct] = useState({});
    const closeProductPage = () => {
        toggleProductPage(false);
    }
    useEffect( () => {
        console.log(categoriesMap[category]);
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (<div key={category.id} className="category-page">
        <h2>{categoriesMap[category]? categoriesMap[category]["name"] : null}</h2>
        <div className="products-container">
            {
                products ? 
                 products["items"].map( (item) => {
                    return (<ProductCard product={item} onProductClicked={() => {setClickedProduct(item); toggleProductPage(true);}} />)
                }) : null
            }
        </div>
        {productPageToggled && <ProductPage product={clickedProduct} onClickedX={closeProductPage}/>}
    </div>)
}

export default CategoryPage;