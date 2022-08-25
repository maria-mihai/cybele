import React from "react";

import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categories: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [allProducts, setAllProducts] = useState([]);
    const value = {categoriesMap, allProducts};

    useEffect( () => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    useEffect( () => {
        let allProductsArray = [];
        Object.keys(categoriesMap).forEach( (category) => {
            categoriesMap[category]["items"].map( (item) => allProductsArray.push(item));
        });
        console.log(allProductsArray);
        setAllProducts(allProductsArray);
    }, [categoriesMap]);
    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}