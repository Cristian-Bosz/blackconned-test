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
    <section className="container-fluid product-list">
      
        <div className="container">
             <div className="row">
        <div className="col-12 my-5">
          <div className="row">
            
                {currentProducts.map((product) => (     
                   <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                      <Product key={product.id} product={product} />
                   </div>
          
      ))}
            
          </div>
        </div>
      </div>
    
    
      <nav className="container" aria-label="...">
        <div className="row ">
          <ul class="justify-content-center pagination pagination-lg">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map(
          (number) => (
          <li class="page-item" aria-current="page" key={number} onClick={() => paginate(number)}>
            <span class="page-link">{number}</span>
          </li>
          )
          )}
        </ul>
        </div>
        
      </nav>        

    </div>
        
   
    </section>
    
  );
};

export default ProductList;
