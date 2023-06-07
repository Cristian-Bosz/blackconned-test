import React from "react";
import { useParams } from "react-router-dom";
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
    
      <section className="container-fluid productDetails-bg">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12 col-lg-5 ">
              <div className="col-12 bg-white">
                <img className="w-100" src={product.image} alt={product.title} />
              </div>       
            </div>

            <div className="col-12 col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <h2 className="display-6">{product.title}</h2>
                      <h3 className="display-5 py-2">{product.price}</h3>
                        <p className="py-2">
                              <i className="text-warning bi bi-star-fill"></i>
                              <i className="text-warning bi bi-star-fill"></i>
                              <i className="text-warning bi bi-star-fill"></i>
                              <i className="text-warning bi bi-star-fill"></i>
                              <i className="text-muted bi bi-star-fill"></i>
                          <span className="list-inline-item text-dark lead mx-1">Rating 4.8 | 36 Comments</span>
                        </p>
                              <ul className="list-inline">
                                  <li className="list-inline-item">
                                      <p className="fw-bold">Brand:</p>
                                  </li>
                                  <li className="list-inline-item">
                                      <p className="text-muted"><strong>{product.brand}</strong></p>
                                  </li>
                              </ul>
                            <form>
                                
                                  <div className="row">             
                                      <div className="col-auto">
                                          <ul className="list-inline pb-3">
                                              <li className="list-inline-item text-right fw-bold">
                                                  Quantity
                                                  <input type="hidden" name="product-quanity" id="product-quanity" value="1"/>
                                              </li>
                                              <li className="list-inline-item ">
                                                <span className="btn btn-success rounded" id="btn-minus" onClick={() => updateQuantity(-1)}>-</span>
                                              </li>
                                              <li className="list-inline-item">
                                                <span className="badge bg-white text-dark" id="var-value">1</span>
                                              </li>
                                              <li className="list-inline-item ">
                                                <span className="btn btn-success rounded" id="btn-plus" onClick={() => updateQuantity(1)}>+</span>
                                              </li>
                                          </ul>
                                      </div>
                                  
                                      <div className="row pb-3">
                                          <div className="col-12 col-md-6 d-grid">
                                              <button className="btn btn-success btn-lg btn-buy">Buy</button>
                                          </div>
                                          <div className="col-12 col-md-6 d-grid">
                                              <button className="btn btn-outline-success btn-lg btn-cart">Add To Cart</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                              <p className="fw-bold">Description:</p>
                              <p className="lead">{product.description}</p>
                              <ul className="list-inline">
                                  <li className="list-inline-item">
                                      <p className="fw-bold">Avaliable Color :</p>
                                  </li>
                                  <li className="list-inline-item">
                                      <p className="text-muted"><strong>White / Black</strong></p>
                                  </li>
                              </ul>

                              <p className="fw-bold">Specification:</p>
                              <ul className="list-unstyled pb-3 lead">
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
    
    </>
  );
};

export default ProductDetails;
