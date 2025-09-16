'use client'
import ProductsFiltered from '@/components/category/ProductsFiltered'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading products…</div>}>
        <ProductsFiltered />
      </Suspense>
      <Footer />
    </div>
  )
}

export default Page
