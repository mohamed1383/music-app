import React from 'react'
import Slider from '../components/slider/slider'
import List from '../components/trendingList/list'

export default function page() {
  return (
    <div className='relative w-[100%] h-[100%]'>
      <Slider></Slider>
      <List></List>
    </div>
  )
}
