import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
  
          <>
            <article>
              <div className="product-wap-contain">
                 <div class="card mb-4 product-wap rounded-0 shadow">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src={product.image} alt={product.title}/>
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li><Link class="btn btn-success text-white" to={`/products/${product.id}`}><i class="bi bi-heart-fill"></i></Link></li>
                                        <li><Link class="btn btn-success text-white mt-2" to={`/products/${product.id}`}><i class="bi bi-eye-fill"></i></Link></li>
                                        <li><Link class="btn btn-success text-white mt-2" to={`/products/${product.id}`}><i class="bi bi-cart-plus-fill"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                        <ul class="list-unstyled d-flex justify-content-between">
                                            <li>
                                            <i class="text-warning bi bi-star-fill"></i>
                                            <i class="text-warning bi bi-star-fill"></i>
                                            <i class="text-warning bi bi-star-fill"></i>
                                            <i class="text-muted bi bi-star-fill"></i>
                                            <i class="text-muted bi bi-star-fill"></i>
                                            </li>
                                            <li class="text-muted text-right">{product.price}</li>
                                        </ul>
                                        <Link to={`/products/${product.id}`} class="h2 text-decoration-none text-dark">{product.title}</Link>
                                        <p class="text-muted">Reviews (48)</p>
                                    </div>
                        </div>
               

      
              </div>
                       
        
    </article>
   
    
    




        </>

  );
};

export default Product;