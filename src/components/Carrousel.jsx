import React from 'react'
import banner2 from '../assets/img/banner2.jpg'

const Carrousel = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide mx-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={banner2} className="d-block w-100" alt="banner del home"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carrousel
