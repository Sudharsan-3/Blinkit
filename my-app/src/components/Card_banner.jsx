import React from 'react'
import Banner from './Banner'
import Cards from './Cards'
import data from "../data/Banner.json"

const Card_banner = () => {
  return (
    <div>
      <Banner data={data} />
      <Cards data={data}/>
      
    </div>
  )
}

export default Card_banner
