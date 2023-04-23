import React from "react";
import { useParams } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';

const ProductDetails = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  return (
    <>
    <NavBar/>
      <section className="container">
        <div className="row">
          <div className="col-6">
            <div className="col-12">
              <img src={product.image} alt={product.title} />
            </div>

              <div className="row">
                <div className="col-3"> <img className="w-75" src={product.image} alt={product.title} /></div>
                <div className="col-3"> <img className="w-75" src={product.image} alt={product.title} /></div>
                <div className="col-3"> <img className="w-75" src={product.image} alt={product.title} /></div>
                <div className="col-3"> <img className="w-75" src={product.image} alt={product.title} /></div>
              </div>
            
          </div>












          <div className="col-6">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
          </div>
        </div>
      </section>
      
      <Footer/>
      
    </>
  );
};

export default ProductDetails;
