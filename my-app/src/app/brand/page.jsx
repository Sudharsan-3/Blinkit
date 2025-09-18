"use client"
import Brand from '@/components/DetailedProductPage/Brand'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Details from '@/components/category/Details'

const page = () => {
    const searchParams = useSearchParams()
    const brandName = searchParams.get("brand")
  return (
    <div>
        <Header />
        <div >
          <div className='flex items-center justify-center '>
            <h1 className='w-7xl p-2 font-bold bg-white border border-gray-100 shadow-sm'>Buy {brandName} Online</h1>
          </div>
          <Suspense fallback={<div>Loading products…</div>}>
          
          <Brand brand={brandName}  />
          </Suspense>
        </div>
        <Details />
        
        <Footer />
      
    </div>
  )
}

export default page
