import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand logo" to="/"><i className="bi bi-shop"></i> Bsz Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link navbutton" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link navbutton" to="/store">Store</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link navbutton" to="/about">About us</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center nav-Buttons">
                  <Link className="text-decoration-none" to="/" >      
                    <i className="text-dark bi bi-person-fill"></i>
                  </Link>
                  <Link className="text-decoration-none position-relative px-3" to="/" >   
                    <i className="text-dark bi bi-cart-fill"></i>
                    <span className="position-absolute top-0 start-105 translate-middle badge rounded-pill bg-success">
                      7
                    </span>
                  </Link>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default NavBar
