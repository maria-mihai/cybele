import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import MainPage from "./routes/main-page/main-page.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<MainPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication></Authentication>} />
      </Route>
    </Routes>
  );
};

export default App;
