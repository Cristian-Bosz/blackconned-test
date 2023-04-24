import React from "react";
import { useParams } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import $ from 'jquery';

const ProductDetails = ({ products }) => {
   // Obtengo el valor del parámetro de ruta 'productId'
  const { productId } = useParams();
  // Busco el producto correspondiente al 'productId' obtenido anteriormente
  const product = products.find((p) => p.id === Number(productId));

   // Esta es la función que actualiza la cantidad del producto que el usuario quisiera comprar
  const updateQuantity = (value) => {
    let currentVal = parseInt($("#var-value").text());
    let newVal = currentVal + value;
    if(newVal < 1) newVal = 1;
    $("#var-value").text(newVal);
    $("#product-quanity").val(newVal);
  }

  return (
    <>
    <NavBar/>
      <section className="container-fluid productDetails-bg">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12 col-lg-5 ">
              <div className="col-12 bg-white">
                <img className="w-100" src={product.image} alt={product.title} />
              </div>       
            </div>

            <div class="col-12 col-lg-7">
                <div class="card">
                  <div class="card-body">
                    <h2 class="display-6">{product.title}</h2>
                      <h3 class="display-5 py-2">{product.price}</h3>
                        <p class="py-2">
                              <i class="text-warning bi bi-star-fill"></i>
                              <i class="text-warning bi bi-star-fill"></i>
                              <i class="text-warning bi bi-star-fill"></i>
                              <i class="text-warning bi bi-star-fill"></i>
                              <i class="text-muted bi bi-star-fill"></i>
                          <span class="list-inline-item text-dark lead mx-1">Rating 4.8 | 36 Comments</span>
                        </p>
                              <ul class="list-inline">
                                  <li class="list-inline-item">
                                      <p className="fw-bold">Brand:</p>
                                  </li>
                                  <li class="list-inline-item">
                                      <p class="text-muted"><strong>{product.brand}</strong></p>
                                  </li>
                              </ul>
                            <form>
                                
                                  <div class="row">             
                                      <div class="col-auto">
                                          <ul class="list-inline pb-3">
                                              <li class="list-inline-item text-right fw-bold">
                                                  Quantity
                                                  <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                              </li>
                                              <li class="list-inline-item ">
                                                <span class="btn btn-success rounded" id="btn-minus" onClick={() => updateQuantity(-1)}>-</span>
                                              </li>
                                              <li class="list-inline-item">
                                                <span class="badge bg-white text-dark" id="var-value">1</span>
                                              </li>
                                              <li class="list-inline-item ">
                                                <span class="btn btn-success rounded" id="btn-plus" onClick={() => updateQuantity(1)}>+</span>
                                              </li>
                                          </ul>
                                      </div>
                                  
                                      <div class="row pb-3">
                                          <div class="col d-grid">
                                              <button class="btn btn-success btn-lg">Buy</button>
                                          </div>
                                          <div class="col d-grid">
                                              <button class="btn btn-outline-success btn-lg">Add To Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                              <p className="fw-bold">Description:</p>
                              <p className="lead">{product.description}</p>
                              <ul class="list-inline">
                                  <li class="list-inline-item">
                                      <p className="fw-bold">Avaliable Color :</p>
                                  </li>
                                  <li class="list-inline-item">
                                      <p class="text-muted"><strong>White / Black</strong></p>
                                  </li>
                              </ul>

                              <p className="fw-bold">Specification:</p>
                              <ul class="list-unstyled pb-3 lead">
                                  <li>Lorem ipsum dolor sit</li>
                                  <li>Amet, consectetur</li>
                                  <li>Adipiscing elit,set</li>
                                  <li>Duis aute irure</li>
                                  <li>Ut enim ad minim</li>
                                  <li>Excepteur sint</li>
                                  <li>Dolore magna aliqua</li>
                              </ul>   
                    </div>
                  </div>
              </div>
          </div>
      </div> 
    </section>
      
      <Footer/>
    </>
  );
};

export default ProductDetails;
