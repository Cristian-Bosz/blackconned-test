import { Link } from "react-router-dom";

const StoreFilter = () => {
  return (
    <>
      <div className="col-12 col-lg-3 my-5">
                    <h2 className="pb-4">Categories</h2>
          
                    <ul className="list-unstyled">
                        <li className="pb-3">
                            <Link className="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" to="#">
                                Brands
                                <i className="bi bi-arrow-down-circle-fill"></i>
                            </Link>
                            <ul id="collapseOne" className="accordion-collapse collapse list-unstyled pl-3 active" >
                                <li><Link className="text-decoration-none text-muted" to="#">Apple (2) </Link></li>
                                <li><Link className="text-decoration-none text-muted" href="#">Samsung (2)</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Sony (2)</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Nvidia (1)</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">HyperX (1)</Link></li>
                            </ul>
                        </li>
                        <li className="pb-3">
                            <Link className="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" to="#">
                                Sale
                                <i className="bi bi-arrow-down-circle-fill"></i>
                            </Link>
                            <ul id="collapseTwo" className="accordion-collapse collapse list-unstyled pl-3" >
                                <li><Link className="text-decoration-none text-muted" to="#">Technology</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Sports & Fitness</Link></li>
                            </ul>
                        </li>
                        <li className="pb-3">
                            <Link className="collapsed d-flex justify-content-between text-decoration-none title-categories" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" to="#">
                                Product
                                <i className="bi bi-arrow-down-circle-fill"></i>
                            </Link>
                            <ul id="collapseThree" className="accordion-collapse collapse list-unstyled pl-3">
                                <li><Link className="text-decoration-none text-muted" to="#">Phones</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Notebooks</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Watches</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Headphones</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Tablets</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">TV</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Drons</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Bicicles</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">GPU</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Keyboards</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Cameras</Link></li>
                                <li><Link className="text-decoration-none text-muted" to="#">Glasses</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
    </>
  )
}

export default StoreFilter
