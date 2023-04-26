import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      

  
  <footer className="text-center text-lg-start text-white">
   <div className="container-fluid">
    <div className="container p-4 pb-0">
     
      <section>
        <div className="row">    
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
            <h2 className=" mb-4 font-weight-bold footer-title logo">
              <i class="bi bi-shop"></i> Bsz Store
            </h2>
            <p>
            Technical exam for the position of Front End developer JR.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nostrum nobis quibusdam accusamus dolor.
            </p>
          </div>
        

          <hr className="w-100 clearfix d-md-none" />

          
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
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

      
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
            <h2 className="text-uppercase mb-4 font-weight-bold footer-title">
              Useful links
            </h2>

            <div className='my-2'>
                <Link to="#" className="text-white">Your Account</Link>
            </div>
            <div className='my-2'> 
                <Link to="#" className="text-white">Become an Affiliate</Link>
            </div>
            <div className='my-2'>
                <Link to="#" className="text-white">Shipping Rates</Link>
            </div>
            <div className='my-2'>
                <Link to="#" className="text-white">Help</Link>
            </div>

          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
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
              © 2023, By Cristian Bösz
              </a>
            </div>
          </div>
                
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
          
            <Link to='#' class="m-1 text-white" role="button"> 
            <i class="bi bi-whatsapp"></i>
            </Link>
  
            <Link to='#' class="m-1 text-white" role="button"> 
            <i class="bi bi-instagram"></i>
            </Link>
 
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
   </div>
  </footer>



    </>
  )
}

export default Footer
