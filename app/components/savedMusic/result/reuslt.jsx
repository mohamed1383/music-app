"use client"

import React,{useContext} from 'react'
import MusicCard from '../../section/musicCard'
import { MenuCotext } from '@/app/context/publicDatas';

export default function Result() {

  let {menuSmallSize} = useContext(MenuCotext)  

  return (
    <div className={`absolute min-h-[70%] flex flex-wrap gap-[25px] transition-all duration-300 ${menuSmallSize ? "w-[95%]" : "w-[80%]"}
    right-0 top-[30%] w-[80%] px-[40px]`}>

        {[...Array(6)].map(() => <MusicCard></MusicCard>)}
    </div>
  )
}

// transition-all duration-300 ${menuSmallSize ? "w-[95%]" : "w-[80%]"}