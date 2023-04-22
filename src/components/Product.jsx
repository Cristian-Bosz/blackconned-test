import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
  
          <div className="my-3 mx-2 product shadow">
          <Link className="text-decoration-none" to={`/products/${product.id}`}>
            <div className="mx-3">
               <img src={product.image} alt={product.title} />
            
            <h2 className="text-start product-precio">{product.price}</h2>
            <p className="text-start product-p">{product.title}</p>
            </div>
           
          </Link>
        </div>

  );
};

export default Product;