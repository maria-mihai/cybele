import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import './search-page.styles.css';
const SearchPage = () => {
    const {allProducts} = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const onSearchChange = (event) => {
      const inputText = event.target.value;
      setSearchFieldValue(inputText);
    }

  useEffect( () => {
    setProducts(allProducts);
  },[allProducts]);

  useEffect( () => {
    const newPrdcts = products.filter((product) => {
      return product["name"].toLowerCase().includes(searchFieldValue)
    });
    setFilteredProducts(newPrdcts);
  }, [products, searchFieldValue]); 
  return (
    <div className='category-page'>
      <input type="search" onChange={onSearchChange} placeholder="Search something..."></input>
      <div className='products-container'>
      {filteredProducts.map( (prdct) => {
        return <ProductCard product={prdct} onProductClicked={() => null}/>
      }) }
    </div>
    </div>
  );
}

export default SearchPage;