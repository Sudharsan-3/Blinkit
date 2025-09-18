import React from 'react'
import FCard from '../category/FCard'
import All from "../../data/AllProducts.json"

const Brand = ({brand}) => {
    const data = All.filter((e)=>e.brand.toLowerCase() === brand)
  return (
    <div className='flex items-center justify-center '>
      <div className='w-7xl bg-gray-100 p-2 shadow-sm'>
        <FCard data={data} />
      </div>
        
      
    </div>
  )
}

export default Brand
