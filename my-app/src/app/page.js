import Banner from '@/components/Banner'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import ProductContainer from '@/components/ProductCotainer'
import ProductList from '@/components/ProductList'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <ProductCard />
      <ProductContainer />
      <Footer />
      
      
    </div>
  )
}

export default page
