import React from 'react'
import Announcment from '../../componenets/UI/Announcment'
import Navbar from '../../componenets/UI/Navbar'
import Footer from '../../componenets/UI/Footer'
import ProductDetails from '../../componenets/Products/ProductDetails'

const productDetails = () => {
  return (
    <>
    <Announcment/>
    <Navbar />
    <ProductDetails/>
    <Footer/>
    </>
  )
}

export default productDetails