import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      
<div className="container-fluid mt-5">
  
  <footer className="text-center text-lg-start text-white">
   
    <div className="container p-4 pb-0">
     
      <section>
     
        <div className="row">
        
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h2 className="text-uppercase mb-4 font-weight-bold footer-title">
              Company name
            </h2>
            <p>
            Technical exam for the position of Front End developer JR at BlackConned.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nostrum nobis quibusdam accusamus dolor.
            </p>
          </div>
        

          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h2 className="text-uppercase mb-4 font-weight-bold footer-title">Products</h2>
            <div className='my-2'>
                <Link to={`/products/4`} className="text-white">iPad Pro</Link>
            </div>
            <div className='my-2'>
                <Link to={`/products/1`} className="text-white">MacBook Pro</Link>
            </div>
            <div className='my-2'>
                <Link to={`/products/2`} className="text-white">iPhone 13</Link>
            </div>
            <div className='my-2'>
                <Link to={`/products/5`} className="text-white">Apple Watch</Link>
            </div> 
          </div>
       

          <hr className="w-100 clearfix d-md-none" />

      
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h2 className="text-uppercase mb-4 font-weight-bold footer-title">
              Useful links
            </h2>

            <div className='my-2'>
                <a className="text-white">Your Account</a>
            </div>
            <div className='my-2'> 
            <a className="text-white">Become an Affiliate</a>
            </div>
            <div className='my-2'>
                <a className="text-white">Shipping Rates</a>
            </div>
            <div className='my-2'>
                <a className="text-white">Help</a>
            </div>

          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h2 className="text-uppercase mb-4 font-weight-bold footer-title">Contact</h2>
            <p><i className="fas fa-home mr-3"></i> Vicente López, Buenos Aires, ARG</p>
            <p><i className="fas fa-envelope mr-3"></i> cristianbosz@hotmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
       
        </div>
      
      </section>
    

      <hr className="my-3"/>


      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              <a className="text-white" href="https://portfolio-cristianbosz.vercel.app/"> 
              © 2023, BlackConned test by Cristian Bösz
              </a>
            </div>
          </div>
         

          
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
          
            <a href='#' class="m-1 text-white" role="button"> 
            <i class="bi bi-whatsapp"></i>
            </a>
  
            <a href='#' class="m-1 text-white" role="button"> 
            <i class="bi bi-instagram"></i>
            </a>
 
            <a href='https://github.com/Cristian-Bosz' class="m-1 text-white" role="button"> 
            <i class="bi bi-github"></i>
            </a>
   
            <a href='https://www.linkedin.com/in/cristian-bosz/' class="m-1 text-white" role="button"> 
            <i class="bi bi-linkedin"></i>
            </a>
          </div>
         
        </div>
      </section>
     
    </div>
   
  </footer>

</div>

    </>
  )
}

export default Footer
