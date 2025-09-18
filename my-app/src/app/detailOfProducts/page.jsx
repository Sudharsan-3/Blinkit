"use client"

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Detailed from '@/components/DetailedProductPage/Detailed'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ExtraProducts from '@/components/DetailedProductPage/ExtraProducts'

const page = () => {
    const seachParams = useSearchParams()
    const id = seachParams.get("id")
    console.log(seachParams.get("id"))
  return (
    <div>
        <Header />
        <Suspense fallback={<div>Loading products…</div>}>
        <Detailed id={id} />
        <ExtraProducts id={id}/>
        </Suspense>
        <Footer />
      
    </div>
  )
}

export default page
