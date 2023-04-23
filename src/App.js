import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import products from "./components/products";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Store from "./components/Store";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/products/:productId" element={<ProductDetails products={products} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
