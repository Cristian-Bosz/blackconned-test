import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </Link>
    </div>
  );
};

export default Product;