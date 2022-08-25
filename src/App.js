import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import MainPage from "./routes/main-page/main-page.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import SearchPage from "./routes/search-page/search-page.component";
import AboutPage from "./routes/about-page/about-page.component";

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<MainPage />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication></Authentication>} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
