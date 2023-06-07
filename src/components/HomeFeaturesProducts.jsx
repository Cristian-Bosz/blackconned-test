import iphone from '../assets/img/shop/iphone13.jpg'
import reloj from '../assets/img/shop/reloj.jpg'
import mac from '../assets/img/shop/macbook.jpg'
import { Link } from 'react-router-dom'

const HomeFeaturesProducts = () => {
  return (
    <>
      <article className='container-fluid productos-destacados'>
            <div className='container'>
                <div className='row text-center'>
                    <h2 className='display-5 title-destacados'>Features Products</h2>
                    <p className='lead p-destacados'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad reprehenderit pariatur similique incidunt, molestias adipisci sit, unde rem odit sunt tempora iure! Explicabo, ad quasi incidunt sint quae aspernatur.</p>
                </div>
                <div className="row my-5">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4 row justify-content-center">
                                <div className="card card-p-destacados h-100 ">
                                    <Link to="/products/2">
                                            <img src={iphone} className="card-img-top" alt="..."/>
                                    </Link>
                                        <div className="card-body">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-muted bi bi-star-fill"></i>
                                                </li>
                                                <li className="text-muted text-right">$799.00</li>
                                            </ul>
                                            <Link to="/products/2" className="h2 text-decoration-none text-dark">Iphone 13</Link>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                                            </p>
                                            <p className="text-muted">Reviews (48)</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4 row justify-content-center">
                                <div className="card card-p-destacados h-100">
                                    <Link to="/products/18">
                                            <img src={reloj} className="card-img-top" alt="..."/>
                                    </Link>
                                        <div className="card-body">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-warning bi bi-star-fill"></i>
                                                <i className="text-muted bi bi-star-fill"></i>
                                                </li>
                                                <li className="text-muted text-right">$149.00</li>
                                            </ul>
                                            <Link to="/products/18" className="h2 text-decoration-none text-dark">Watch</Link>
                                            <p className="card-text">
                                                Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
                                            </p>
                                            <p className="text-muted">Reviews (48)</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-4 row justify-content-center">
                                <div className="card card-p-destacados h-100">
                                    <Link to="/products/1">
                                        <img src={mac} className="card-img-top" alt="..."/>
                                    </Link>
                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-warning bi bi-star-fill"></i>
                                            <i className="text-muted bi bi-star-fill"></i>
                                            </li>
                                            <li className="text-muted text-right">$1299.00</li>
                                        </ul>
                                        <Link to="/products/1" className="h2 text-decoration-none text-dark">Macbook Pro</Link>
                                        <p className="card-text">
                                            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                                        </p>
                                        <p className="text-muted">Reviews (48)</p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
       </article>
    </>
  )
}

export default HomeFeaturesProducts
