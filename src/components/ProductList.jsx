import React, { useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";


const ProductList = ({ products }) => {
  // Defino un estado "currentPage" con un valor inicial de 1 y una función "setCurrentPage" para actualizar el estado
  const [currentPage, setCurrentPage] = useState(1); 
  // Defino un estado "productsPerPage" con un valor inicial de 10
  const [productsPerPage] = useState(10);

  // Calculo el índice del último producto y del primer producto que se está mostrando en la página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Creo un array "currentProducts" que contiene los productos que se están mostrando en la página actualmente
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Defino una función "paginate" que recibe un número de página y actualiza el estado "currentPage" con ese número
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="container-fluid product-list">
        <div className="container">
             <div className="row align-items-start ">
                <div class="col-12 col-lg-3 my-5">
                    <h2 class="pb-4">Categories</h2>
          
                    <ul class="list-unstyled">
                        <li class="pb-3">
                            <Link class="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" to="#">
                                Brands
                                <i class="bi bi-arrow-down-circle-fill"></i>
                            </Link>
                            <ul id="collapseOne" class="accordion-collapse collapse list-unstyled pl-3 active" >
                                <li><Link class="text-decoration-none text-muted" to="#">Apple (2) </Link></li>
                                <li><Link class="text-decoration-none text-muted" href="#">Samsung (2)</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Sony (2)</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Nvidia (1)</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">HyperX (1)</Link></li>
                            </ul>
                        </li>
                        <li class="pb-3">
                            <Link class="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" to="#">
                                Sale
                                <i class="bi bi-arrow-down-circle-fill"></i>
                            </Link>
                            <ul id="collapseTwo" class="accordion-collapse collapse list-unstyled pl-3" >
                                <li><Link class="text-decoration-none text-muted" to="#">Technology</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Sports & Fitness</Link></li>
                            </ul>
                        </li>
                        <li class="pb-3">
                            <Link class="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" to="#">
                                Product
                                <i class="bi bi-arrow-down-circle-fill"></i>
                            </Link>
                            <ul id="collapseThree" class="accordion-collapse collapse list-unstyled pl-3">
                                <li><Link class="text-decoration-none text-muted" to="#">Phones</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Notebooks</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Watches</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Headphones</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Tablets</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">TV</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Drons</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Bicicles</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">GPU</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Keyboards</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Cameras</Link></li>
                                <li><Link class="text-decoration-none text-muted" to="#">Glasses</Link></li>
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
    
    
      <nav className="container">
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
