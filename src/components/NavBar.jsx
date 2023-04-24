import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>

    <nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container">
    <a class="navbar-brand logo" href="#"><i class="bi bi-shop"></i> Bosz Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link navbutton" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link navbutton" to="/store">Store</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link navbutton" to="/about">About us</Link>
        </li>
      </ul>
      <div class="d-flex align-items-center nav-Buttons">
              <a class="text-decoration-none" href="#" >      
                <i class="text-dark bi bi-person-fill"></i>
             </a>
             <a class="text-decoration-none position-relative px-3" href="#" >   
             <i class="text-dark bi bi-cart-fill"></i>
              <span class="position-absolute top-0 start-105 translate-middle badge rounded-pill bg-success">
                7
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
            </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar
