'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Brand from '@/components/DetailedProductPage/Brand'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Details from '@/components/category/Details'

function BrandContent() {
  const searchParams = useSearchParams()
  const brandName = searchParams.get('brand')

  return (
    <>
      <div className="flex items-center justify-center ">
        <h1 className="w-7xl p-2 font-bold bg-white border border-gray-100 shadow-sm">
          Buy {brandName} Online
        </h1>
      </div>
      <Brand brand={brandName} />
    </>
  )
}

export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading products…</div>}>
        <BrandContent />
      </Suspense>
      <Details />
      <Footer />
    </div>
  )
}
