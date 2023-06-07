const AboutUsServices = () => {
  return (
    <>
      <article className='container my-5'>
            <h2 className='display-5 text-center title-services'>Our Services</h2>
            <p className='lead text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet. </p>
            
            <div className="row my-5">
            <div className="col-md-6 col-lg-3  pb-5">
                <div className="h-100 py-5 servicios-icon shadow">
                    <div className="h1 text-success text-center"> <i className="bi bi-truck"></i></div>
                    <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 servicios-icon shadow">
                    <div className="h1 text-success text-center"> <i className="bi bi-arrow-left-right"></i></div>
                    <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 servicios-icon shadow">
                    <div className="h1 text-success text-center"><i className="bi bi-tag"></i></div>
                    <h2 className="h5 mt-4 text-center">Promotion</h2>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
                <div className="h-100 py-5 servicios-icon shadow">
                    <div className="h1 text-success text-center">   <i className="bi bi-person-fill"></i></div>
                    <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                </div>
            </div>
            </div>
                        
        </article>
    </>
  )
}

export default AboutUsServices
