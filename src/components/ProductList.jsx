import React, { useState } from "react";
import Product from "./Product";
import StoreFilter from "./StoreFilter";
import '../styles/ProductList.css';

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
                <StoreFilter/>


              <div className="col-12 col-sm-12 col-md-12 col-lg-9 my-5">
                <div className="container">
                  <div className="row">

                        {currentProducts.map((product) => (     
                            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                              <Product key={product.id} product={product} />
                            </div>
                  
                        ))}

                  </div>
                </div>  
              </div>
            </div>
    
    
      <nav className="container">
          <div className="row ">
            <ul className="justify-content-center pagination pagination-lg">
              {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => i + 1).map(
                (number) => (
                  <li className="page-item" aria-current="page" key={number} onClick={() => paginate(number)}>
                    <span className="page-link">{number}</span>
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
