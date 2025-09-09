import React from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import MusicItem from './musicItem';

export default function List() {
  return (
    <div className={`absolute right-[2.5%] top-[50%] w-[22%] min-h-[200px] rounded-[10px] border-[#ffffff0f] glass`}>
      <div className="flex items-center mt-6 ml-11 gap-[10px] mb-[25px]">
        <IoIosTrendingUp className='text-[#ff6a00] text-xl'></IoIosTrendingUp>
        <h1 className='text-xl'>Trending Now</h1>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
         <MusicItem></MusicItem>
         <MusicItem></MusicItem>
         <MusicItem></MusicItem>
         <MusicItem></MusicItem>
         <MusicItem></MusicItem>
         <MusicItem></MusicItem>
         <MusicItem></MusicItem>
      </div>
    </div>
  )
}
