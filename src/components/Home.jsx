import React from 'react'
import Carrousel from './Carrousel'
import NavBar from './NavBar'
import Footer from './Footer'
import auriculares from '../assets/img/shop/sony.jpg'
import dron from '../assets/img/shop/dron.png'
import gafas from '../assets/img/shop/gafas.webp'
import iphone from '../assets/img/shop/iphone13.jpg'
import reloj from '../assets/img/shop/reloj.jpg'
import mac from '../assets/img/shop/macbook.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <NavBar/>
        <Carrousel/>

       <section className='container my-5'>
        <div className='text-center'> 
        <h2 className='display-5 title-categorias'>Categories of The Month</h2>
        <p className='lead p-categories'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
       <div className='container-categories'>
          <div class="row row-categories">
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img src={auriculares} alt="imagen de auriculares sony" class="rounded-circle img-fluid border shadow-sm img-categorias"/></a>
                <h3 class="text-center mt-3 mb-3">Headphones</h3>
                <p class="text-center"><a class="btn btn-success">Go shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img src={gafas} alt="imagen de gafas" class="rounded-circle img-fluid border shadow-sm"/>
                  </a>
                <h3 class="text-center mt-3 mb-3">Accesorios</h3>
                <p class="text-center"><a class="btn btn-success">Go shop</a></p>
            </div>
            <div class="col-12 col-md-4 p-5 mt-3">
                <a href="#">
                  <img src={dron} alt="imagen de dron" class="rounded-circle img-fluid border shadow-sm"/>
                </a>
                <h3 class="text-center mt-3 mb-3">Drones</h3>
                <p class="text-center"><a class="btn btn-success">Go shop</a></p>
            </div>
        </div>
       </div>
     

       </section>

       <article className='container-fluid productos-destacados'>
        <div className='container'>
          <div className='row text-center'>
          <h2 className='display-5 title-destacados'>Features Products</h2>
          <p className='lead p-destacados'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad reprehenderit pariatur similique incidunt, molestias adipisci sit, unde rem odit sunt tempora iure! Explicabo, ad quasi incidunt sint quae aspernatur.</p>
        </div>
       <div class="row my-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4 row justify-content-center">
                    <div class="card card-p-destacados h-100 ">
                    <Link to="/products/2">
                            <img src={iphone} class="card-img-top" alt="..."/>
                        </Link>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                  <i class="text-warning bi bi-star-fill"></i>
                                  <i class="text-warning bi bi-star-fill"></i>
                                  <i class="text-warning bi bi-star-fill"></i>
                                  <i class="text-warning bi bi-star-fill"></i>
                                  <i class="text-muted bi bi-star-fill"></i>
                                </li>
                                <li class="text-muted text-right">$799.00</li>
                            </ul>
                            <Link to="/products/2" class="h2 text-decoration-none text-dark">Iphone 13</Link>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4 row justify-content-center">
                    <div class="card card-p-destacados h-100">
                    <Link to="/products/18">
                            <img src={reloj} class="card-img-top" alt="..."/>
                        </Link>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-muted bi bi-star-fill"></i>
                                </li>
                                <li class="text-muted text-right">$149.00</li>
                            </ul>
                            <Link to="/products/18" class="h2 text-decoration-none text-dark">Watch</Link>
                            <p class="card-text">
                                Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                            </p>
                            <p class="text-muted">Reviews (48)</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4 row justify-content-center">
                    <div class="card card-p-destacados h-100">
                        <Link to="/products/1">
                            <img src={mac} class="card-img-top" alt="..."/>
                        </Link>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-warning bi bi-star-fill"></i>
                                <i class="text-muted bi bi-star-fill"></i>
                                </li>
                                <li class="text-muted text-right">$360.00</li>
                            </ul>
                            <Link to="/products/1" class="h2 text-decoration-none text-dark">Macbook Pro</Link>
                            <p class="card-text">
                                Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                            </p>
                            <p class="text-muted">Reviews (74)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       </article>
   <Footer/>
    </>
  )
}

export default Home
