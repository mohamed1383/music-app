"use client"

import { MenuCotext } from '@/app/(main)/context/publicDatas';
import React,{useContext} from 'react'
import { GoSearch } from "react-icons/go";

export default function Header() {

  const {menuSmallSize} = useContext(MenuCotext)

  return (
    <div className={`absolute transition-all duration-300 space-y-[25px] pl-[35px] pt-[40px] flex flex-col top-0 right-0 ${menuSmallSize ? "w-[95%]" : "w-[80%]"} min-h-[30%]`}>
      <h1 className='text-3xl font-bold'>Search Music</h1>
      <div className="flex relative items-center">
         <input type="search" placeholder='Search for songs, artists, albums...' 
         className=' border-[#ffffff0f] border w-[95%] outline-none focus:border-[#ff6a00] focus:shadow-[0_0_0_3px_rgba(255,106,0,0.4)] 
             placeholder:text-[#ffffffac] h-[50px] rounded-[10px] box-border pr-5 pl-[35px] transition-all duration-300' />

         <GoSearch className='absolute left-[10px] cursor-pointer'></GoSearch>   
      </div>
    </div>
  )
}


// focus:border-[#ff6a00] focus:shadow-[0_0_0_3px_rgba(255,106,0,0.4)] 