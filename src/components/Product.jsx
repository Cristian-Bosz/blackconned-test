import React from "react";
import { Link } from "react-router-dom";
import '../styles/Product.css';

const Product = ({ product }) => {
  return (
  
          <>
            <article>
              <div className="product-wap-contain">
                 <div className="card mb-4 product-wap rounded-0 shadow">
                            <div className="card rounded-0">
                                <img className="card-img rounded-0 img-fluid" src={product.image} alt={product.title}/>
                                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul className="list-unstyled">
                                        <li><Link className="btn btn-success text-white" to={`/products/${product.id}`}><i className="bi bi-heart-fill"></i></Link></li>
                                        <li><Link className="btn btn-success text-white mt-2" to={`/products/${product.id}`}><i className="bi bi-eye-fill"></i></Link></li>
                                        <li><Link className="btn btn-success text-white mt-2" to={`/products/${product.id}`}><i className="bi bi-cart-plus-fill"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-muted bi bi-star-fill"></i>
                                            </li>
                                            <li className="text-muted text-right">{product.price}</li>
                                        </ul>
                                        <Link to={`/products/${product.id}`} className="text-decoration-none text-dark"><h2>{product.title}</h2></Link>
                                        <p className="text-muted">Reviews (48)</p>
                                    </div>
                        </div>
               

      
              </div>
                       
        
    </article>
   
    
    




        </>

  );
};

export default Product;