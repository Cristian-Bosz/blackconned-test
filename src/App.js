import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import products from "./components/products";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductDetails products={products} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
