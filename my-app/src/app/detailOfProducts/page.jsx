'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Detailed from '@/components/DetailedProductPage/Detailed'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ExtraProducts from '@/components/DetailedProductPage/ExtraProducts'

// Small child that actually reads the search params:
function ProductContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log(id)

  return (
    <>
      <Detailed id={id} />
      <ExtraProducts id={id} />
    </>
  )
}

export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading products…</div>}>
        <ProductContent />
      </Suspense>
      <Footer />
    </div>
  )
}
