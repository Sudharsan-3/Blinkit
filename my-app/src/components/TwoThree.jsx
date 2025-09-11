import React from 'react'
import TwoCard from './TwoCard'
import ThreeCard from './ThreeCard'
import data from "../data/ThreeImage.json";


const TwoThree = () => {
  return (
    <div className=' items-center justify-center flex md:flex p-4  lg:hidden'>
        <div className=' w-7xl'>
            <h1>
        Shop by category
        </h1>
        <TwoCard data={data} />
        <ThreeCard data={data} />
        </div>
        
      
    </div>
  )
}

export default TwoThree
