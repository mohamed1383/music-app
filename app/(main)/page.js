"use client"

import React,{useContext} from 'react'
import Slider from './components/slider/slider'
import List from './components/trendingList/list'
import { MenuCotext } from './context/publicDatas' 
import MusicCard from './components/section/musicCard'

export default function page() {

  let {menuSmallSize} = useContext(MenuCotext)
  
  return (
    <div className='relative w-[100%] h-[100vh]'>
      <Slider></Slider>
      <List></List>
      <h1 className={`absolute transition-all duration-300 top-[45%] ${menuSmallSize ? "left-[7.5%]" : "left-[22.5%]"} text-[35px]`}>Recently Added</h1>
      <div className={`absolute mt-10 mb-5 flex gap-12 transition-all duration-300 top-[50%] min-h-[30%] ${menuSmallSize ? "w-[63%]  left-[7.5%]" : "w-[50%]  left-[22.5%]"} rounded-[10px]`}>
        <MusicCard></MusicCard>
        <MusicCard></MusicCard>
        <MusicCard></MusicCard>
      </div>

      <h1 className={`absolute mt-14 transition-all duration-300 top-[97%] ${menuSmallSize ? "left-[7.5%]" : "left-[22.5%]"} text-[35px]`}>popular</h1>
      <div className={`absolute pb-10 mt-28 flex gap-12 transition-all duration-300 top-[100%] min-h-[30%] ${menuSmallSize ? "w-[63%]  left-[7.5%]" : "w-[50%]  left-[22.5%]"}`}>
        <MusicCard></MusicCard>
        <MusicCard></MusicCard>
        <MusicCard></MusicCard>
      </div>
    </div>
  )
}
