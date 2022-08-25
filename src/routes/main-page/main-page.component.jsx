import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductsCarousel from "../../components/products-carousel/products-carousel.component";
import './main-page.styles.css';
import { CategoriesContext } from "../../contexts/categories.context";
const MainPage = () => {
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate('/shop');
  }
  const {allProducts} = useContext(CategoriesContext);
  const bestselling = allProducts.slice(0,5);
  const newlyAdded = allProducts.slice(5,10);
    return (<div className="main-page-container"><div className="main-page">
        <h1>Make your home a sanctuary</h1>
        <button onClick={navigateToShop}>GO TO SHOP</button>
    </div>
    <div className="carousel-and-title">
      <h2 className="best-selling">Our best-selling products</h2>
      <ProductsCarousel productsToDisplay={bestselling}/>
    </div>
    <div className="carousel-and-title">
      <h2 className="best-selling">Newly Added</h2>
      <ProductsCarousel productsToDisplay={newlyAdded}/>
    </div>
    </div>)
}

export default MainPage;