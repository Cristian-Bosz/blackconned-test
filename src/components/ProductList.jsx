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
             <div className="row align-items-start ">
             <div class="col-12 col-lg-3 my-5">
                <h2 class="pb-4">Categories</h2>
                
                <ul class="list-unstyled">
                    <li class="pb-3">
                        <a class="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" href="#">
                            Brands
                            <i class="bi bi-arrow-down-circle-fill"></i>
                        </a>
                        <ul id="collapseOne" class="accordion-collapse collapse list-unstyled pl-3 active" >
                            <li><a class="text-decoration-none text-muted" href="#">Apple (2) </a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Samsung (2)</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Sony (2)</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Nvidia (1)</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">HyperX (1)</a></li>
                        </ul>
                    </li>
                    <li class="pb-3">
                        <a class="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" href="#">
                            Sale
                            <i class="bi bi-arrow-down-circle-fill"></i>
                        </a>
                        <ul id="collapseTwo" class="accordion-collapse collapse list-unstyled pl-3" >
                            <li><a class="text-decoration-none text-muted" href="#">Technology</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Sports & Fitness</a></li>
                        </ul>
                    </li>
                    <li class="pb-3">
                        <a class="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" href="#">
                            Product
                            <i class="bi bi-arrow-down-circle-fill"></i>
                        </a>
                        <ul id="collapseThree" class="accordion-collapse collapse list-unstyled pl-3">
                            <li><a class="text-decoration-none text-muted" href="#">Phones</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Notebooks</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Watches</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Headphones</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Tablets</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">TV</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Drons</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Bicicles</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">GPU</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Keyboards</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Cameras</a></li>
                            <li><a class="text-decoration-none text-muted" href="#">Glasses</a></li>
                        </ul>
                    </li>
                </ul>
            </div>




        <div className="col-12 col-sm-12 col-md-12 col-lg-9 my-5">
          <div className="container">
          <div class="row">

                {currentProducts.map((product) => (     
                    <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <Product key={product.id} product={product} />
                    </div>
          
      ))}
           
            </div>
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
