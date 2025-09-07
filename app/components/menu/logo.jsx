import React from 'react'
import { PiMusicNotesSimple } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Logo() {
  return (
    <div className='flex justify-between items-center w-full px-4 pt-8 pb-8 border-b-[1px] border-[#ffffff0f]'>
        <div className="flex items-center gap-2.5">
            <PiMusicNotesSimple className='text-2xl text-[#ff6a00]'></PiMusicNotesSimple>
            <h1 className='text-2xl'>MusicApp</h1>
        </div>
        <div className="w-8 h-8 rounded-[10px] transition-all duration-200 hover:bg-[#ff6a00] 
        flex justify-center items-center">

            <FaChevronLeft className='cursor-pointer'></FaChevronLeft>
        </div>
    </div>
  )
}
