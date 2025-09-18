import React from 'react'
import All from "../../data/BlinkitReason.json"

const WhyBuyInBlinkit = () => {
    
  return (
    <div className='hidden md:block '>
        <div className='mt-10'>
            <h1 className='font-bold'>
        Why shop from blinkit?
        </h1>
        <div className='flex flex-col gap-4 mt-2'>
          {
            All.map((e)=>{
                return(
                    <div key={e.id} className='flex gap-4 text-xs'>
            <img src={e.image} alt={e.name} className='w-16 h-16' />
            <div>
                <h1>
                    {e.name}

                </h1>
                <h3>
                    {e.reason}

                </h3>
            </div>
        </div>
                )
                
            })
        }   
        </div>
       
        </div>
        
        
        

      
    </div>
  )
}

export default WhyBuyInBlinkit
