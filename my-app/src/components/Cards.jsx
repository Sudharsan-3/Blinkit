import Image from 'next/image'
import React from 'react'
import one from "../../public/assets/card0/1.png"
import two from "../../public/assets/card0/2.png"
import three from "../../public/assets/card0/3.png"

const Cards = () => {
  return (
    <div className='flex items-center justify-center'>
         <div className='flex gap-5 items-center w-7xl p-4'>
        <Image src={one} alt={one}   className="w-85"  />
        <Image src={two} alt={two}   className="w-85"  />
        <Image src={three} alt={three}  className="w-85"   />
      
    </div> 
    </div>
  )
}

export default Cards
