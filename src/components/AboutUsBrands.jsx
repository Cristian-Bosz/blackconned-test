import { motion } from "framer-motion"
import samsung from '../assets/img/logos/samsung.svg'
import apple from '../assets/img/logos/apple-logo.svg'
import sony from '../assets/img/logos/sony-logo.svg'
import nvidia from '../assets/img/logos/nvidia-logo.svg'
const AboutUsBrands = () => {
  return (
    <>
      
      <article className='container-fluid mt-5 marcas'>
            <div className='container'>
                <h2 className='display-5 text-center title-brands pt-5'>Our Brands</h2>
                <p className='lead text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet. </p>
            
                <div className="row my-5">
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 row align-items-center">
                            <motion.div className="text-center"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}> 
                            <img src={samsung} alt="logo de samsung" className='w-50 brand-img'/>
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 row align-items-center">
                            <motion.div className="text-center" 
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>  
                            <img src={nvidia} alt="logo de nvidia" className='w-50 brand-img'/>
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 row align-items-center">
                            <motion.div className="text-center" 
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}> 
                            <img src={apple} alt="logo de apple" className='w-25 brand-img'/>
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 row align-items-center">
                            <motion.div className="text-center"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{  type: "spring", stiffness: 400, damping: 20 }}>   
                            <img src={sony} alt="logo de sony" className='w-50 brand-img'/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            
                        
        </article>
    </>
  )
}

export default AboutUsBrands
