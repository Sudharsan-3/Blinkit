"use client"

import React from 'react'
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
        <Detailed id={id} />
        <ExtraProducts id={id}/>
        <Footer />
      
    </div>
  )
}

export default page
