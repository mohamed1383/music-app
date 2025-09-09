"use client"

import React, { useState } from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import MusicItem from './musicItem';

const trendMusics = [
  { id: 1, name: "Night Neon", artist: "Sample Artist", img: "" },
  { id: 2, name: "Digital Pulse", artist: "Cyber Sound", img: "" },
  { id: 3, name: "Midnight Drive", artist: "Retro Wave", img: "" },
]


export default function List() {

  let [isSelected, setIsSelected] = useState(
    trendMusics.map((item) => {
      return {id: item.id , selected: false}
    })
  )

  const selectBox = (id) => {
    setIsSelected((prev) => prev.map((item) => {
      return {...item,selected: item.id == id}
    }))
  }

  console.log(isSelected)

  return (
    <>
      <div className={`absolute mb-5 right-[2.5%] top-[50%] w-[22%] min-h-[200px] rounded-[10px] border-[#ffffff0f] glass`}>
        <div className="flex items-center mt-6 ml-11 gap-[10px] mb-[25px]">
          <IoIosTrendingUp className='text-[#ff6a00] text-xl'></IoIosTrendingUp>
          <h1 className='text-xl'>Trending Now</h1>
        </div>
        <div className="w-full flex flex-col items-center gap-2 mb-4">
          {trendMusics.map((item,index) => {
            console.log(isSelected[index].selected)
            return <MusicItem {...item} isSelected={isSelected[index].selected} setIsSelected={selectBox}></MusicItem>
          })}
        </div>
      </div>
    </>
  )
}
