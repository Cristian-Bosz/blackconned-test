import React from 'react'
import banner from '../img/banner1.jpg'
const Carrousel = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide mx-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={banner} className="d-block w-100" alt="banner del home"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carrousel
