import React from 'react'
import ProductList from './ProductList'
import products from './products'

import Carrousel from './Carrousel'
import NavBar from './NavBar'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <NavBar/>
        <Carrousel/>

        <ProductList products={products} />
   <Footer/>
    </>
  )
}

export default Home
