import React from 'react'
import ProductList from '../components/ProductList'
import products from '../const/products'

const Store = () => {
  return (
    <>
        <ProductList products={products} />
    </>
  )
}

export default Store
