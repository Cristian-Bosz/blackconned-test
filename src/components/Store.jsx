import React from 'react'
import ProductList from './ProductList'
import products from './products'
import NavBar from './NavBar'
import Footer from './Footer'

const Store = () => {
  return (
    <>
        <NavBar/>

       <ProductList products={products} />
      <Footer/>

    </>
  )
}

export default Store
