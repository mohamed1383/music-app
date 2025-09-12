"use client"

import React, { useState, useContext } from 'react'
import { BsSortDown } from "react-icons/bs";
import { BsSortUp } from "react-icons/bs";
import { MenuCotext } from '@/app/context/publicDatas';

export default function Filter() {

    let [sortDown, setSortDown] = useState(true)
    let { menuSmallSize } = useContext(MenuCotext)

    const changeSort = () => {
        setSortDown((prev) => !prev)
    }

    return (
        <div className={`flex justify-between items-center absolute transition-all duration-300 ${menuSmallSize ? "w-[95%]" : "w-[80%]"} right-0 top-[23%] px-[40px]`}>
            <input type="search" placeholder='Search songs...' className='w-[40%] h-[40px] outline-none
      focus:border-[#ff6a00] rounded-[5px] pr-[15px] pl-[15px] transition-all duration-300
       focus:shadow-[0_0_0_3px_rgba(255,106,0,0.4)] border-[#ffffff0f] border'/>


            <div className="flex gap-[20px]">
                <div onClick={changeSort} className="w-[40px] h-[40px] rounded-[10px] cursor-pointer  transition-all 
        duration-300 hover:bg-[#ff6a00] flex justify-center items-center">

                    {sortDown ? <BsSortDown className='w-[25px] h-[25px]'></BsSortDown> : <BsSortUp className='w-[25px] h-[25px]'></BsSortUp>}
                </div>
                <select name="filter" id="" className='w-[140px] h-[40px] border outline-none 
         rounded-[10px] shadow-[0_0_0_3px_rgba(255,106,0,0.4)] border-[#ff6a00]'>

                    <option className='bg-black text-white rounded-t-[10px]' value="Data Added">Data Added</option>
                    <option className='bg-black text-white ' value="Name">Name</option>
                    <option className='bg-black text-white rounded-b-[10px]' value="Artist">Artist</option>
                </select>
            </div>
        </div>
    )
}


// focus:border-[#ff6a00] focus:shadow-[0_0_0_3px_rgba(255,106,0,0.4)] border-[#ffffff0f] border