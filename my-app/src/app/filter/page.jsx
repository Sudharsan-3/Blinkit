'use client'
import ProductsFiltered from '@/components/category/ProductsFiltered'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
        <ProductsFiltered />
      <Footer />
    </div>
  )
}

export default page
