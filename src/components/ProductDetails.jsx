import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetails;
