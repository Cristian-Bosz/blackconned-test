import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import products from "./const/products";
import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Store from "./pages/Store";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
 <NavBar/>
      <Routes>
     
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/products/:productId" element={<ProductDetails products={products} />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
