import React from 'react'
import { PiMusicNotesSimple } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export default function Logo({setSmallSize,smallSize}) {
  return (
    <div className='flex transition-all duration-300 justify-between items-center w-full px-4 pt-8 pb-8 border-b-[1px] border-[#ffffff0f]'>
        <div className={`${smallSize ? "hidden" : ''} flex items-center gap-2.5`}>
            <PiMusicNotesSimple className='text-2xl text-[#ff6a00]'></PiMusicNotesSimple>
            <h1 className='text-2xl'>MusicApp</h1>
        </div>
        <div onClick={setSmallSize} className="w-12 h-12  rounded-[10px] hover:bg-[#ff6a00] 
        flex justify-center items-center">

            {smallSize ? <FaChevronRight className='cursor-pointer'></FaChevronRight> : <FaChevronLeft className='cursor-pointer'></FaChevronLeft>}
        </div>
    </div>
  )
}
