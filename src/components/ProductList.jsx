import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product-list">
      {currentProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map(
          (number) => (
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
