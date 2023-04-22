import React from 'react'

const NavBar = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-dark navbar-principal">
        <div class="container">
            <a class="navbar-brand" href="#">
                <i class="bi bi-shop"></i>
            </a>
            <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active text-white fw-bold" href="#">BlackConned Store</a>
                </li>
            </ul>
            
            <div class="d-flex align-items-center nav-Buttons">
                <button type="button" class="btn btn-outline-light px-3 me-2 login">
                Login
                </button>
                <button type="button" class="btn btn-light me-3 signup">
                Sign up for free
                </button>
                <a class="btn btn-outline-light px-3" href="#"role="button">
                <i class="bi bi-cart"></i>
                </a>
            </div>
            </div>
        </div>
    </nav>


    </>
  )
}

export default NavBar
