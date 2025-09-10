import Image from 'next/image'
import React from 'react'
import banner from "../../public/assets/banner/banner.png"

const Banner = () => {
  return (
    <div className='flex items-center justify-center'>
         <div className='flex gap-5 items-center w-7xl '>
        <Image src={banner} alt="banner" />
      </div>
      
      
    </div>
  )
}

export default Banner
