import React from 'react'
import { motion } from "framer-motion"
import NavBar from './NavBar'
import Footer from './Footer'
import samsung from '../assets/img/logos/samsung.svg'
import apple from '../assets/img/logos/apple-logo.svg'
import sony from '../assets/img/logos/sony-logo.svg'
import nvidia from '../assets/img/logos/nvidia-logo.svg'
import team from '../assets/img/logos/Creative team-bro.svg'
const Aboutus = () => {
  return (
    <>
        <NavBar/>
        <section class="bg-success py-5">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-md-8 text-white">
                        <h2 className='display-5 title-aboutus'>About Us</h2>
                        <p className='lead p-about'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src={team} alt="foto sobre el equipo"/>
                    </div>
                </div>
            </div>
        </section>

        <article className='container my-5'>
            <h2 className='display-5 text-center title-services'>Our Services</h2>
            <p className='lead text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet. </p>
            
            <div class="row my-5">
            <div class="col-md-6 col-lg-3  pb-5">
                <div class="h-100 py-5 servicios-icon shadow">
                    <div class="h1 text-success text-center"> <i class="bi bi-truck"></i></div>
                    <h2 class="h5 mt-4 text-center">Delivery Services</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 servicios-icon shadow">
                    <div class="h1 text-success text-center"> <i class="bi bi-arrow-left-right"></i></div>
                    <h2 class="h5 mt-4 text-center">Shipping &amp; Return</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 servicios-icon shadow">
                    <div class="h1 text-success text-center"><i class="bi bi-tag"></i></div>
                    <h2 class="h5 mt-4 text-center">Promotion</h2>
                </div>
            </div>

            <div class="col-md-6 col-lg-3 pb-5">
                <div class="h-100 py-5 servicios-icon shadow">
                    <div class="h1 text-success text-center">   <i class="bi bi-person-fill"></i></div>
                    <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
                </div>
            </div>
            </div>
                        
        </article>


        <article className='container-fluid mt-5 marcas'>
            <div className='container'>
                <h2 className='display-5 text-center title-brands pt-5'>Our Brands</h2>
                <p className='lead text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet. </p>
            
                <div class="row my-5">
                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 row align-items-center">
                            <motion.div class="text-center"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}> 
                            <img src={samsung} alt="logo de samsung" className='w-50 brand-img'/>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 row align-items-center">
                            <motion.div class="text-center" 
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>  
                            <img src={nvidia} alt="logo de nvidia" className='w-50 brand-img'/>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 row align-items-center">
                            <motion.div class="text-center" 
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}> 
                            <img src={apple} alt="logo de apple" className='w-25 brand-img'/>
                            </motion.div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 pb-5">
                        <div class="h-100 py-5 row align-items-center">
                            <motion.div class="text-center"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>   
                            <img src={sony} alt="logo de sony" className='w-50 brand-img'/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            
                        
        </article>

    
        <Footer/>
    </>
  )
}

export default Aboutus
