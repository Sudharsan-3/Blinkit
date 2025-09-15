import Banner from '@/components/Banner'
import Card_banner from '@/components/Card_banner'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MySearchLoader from '@/components/MySearchLoader'
import ProductCard from '@/components/ProductCard'
import ProductContainer from '@/components/ProductCotainer'
import ProductList from '@/components/ProductList'
import TwoCard from '@/components/TwoCard'
import TwoThree from '@/components/TwoThree'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Card_banner />
      <TwoThree />
      <ProductCard />
      <ProductContainer />
      <Footer />
     
      
      
    </div>
  )
}

export default page
