import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Product = ({ product }) => {
  return (
  
          <>
          <div className="container">
          <Link className="text-decoration-none" to={`/products/${product.id}`}>     
                <motion.div class="card card-products my-4" 
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{  type: "spring", stiffness: 400, damping: 20 }}>
                  <img className="product-img" src={product.image} alt={product.title} />
                  <div class="card-body">
                  <h2 className="text-start product-precio">{product.price}</h2>
                    <p className="text-start product-p">{product.title}</p>
                  </div>             
                </motion.div>          
              </Link>
          </div>
     
        </>

  );
};

export default Product;