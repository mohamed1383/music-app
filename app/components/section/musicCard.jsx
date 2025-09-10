import React from 'react'
import { GoDownload } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

export default function MusicCard() {
  return (
    <div className='flex  relative group items-center flex-col w-[25%] h-[400px] rounded-[10px] transition-all duration-300
    backdrop-blur-[12px] bg-[#ffffff0a] border border-[#ffffff0f] hover:border-[#ffffff1f] hover:bg-[#ffffff14]'>

      <Image className='mt-5 w-[90%] h-[50%]'></Image>
      <div className="w-[45px] h-[45px] hidden group-hover:flex justify-center items-center rounded-full
       bg-[#ff6a00] hover:bg-[#ff6a00dd] cursor-pointer transition-all duration-300 absolute top-[25%]">

        <FaPlay></FaPlay>
      </div>
      <div className="w-full pl-[10px] pt-[20px]">
        <h1 className='text-[20px] font-bold mb-[10px]'>Cosmic Journey</h1>
        <p className="text-[14px]">Space Echo</p>
        <p className="text-[14px]">Ambient</p>
      </div>
      <div className="flex w-full mt-[20px] pl-[11px] gap-[35px]">
        <div className="w-[40px] h-[40px] group-hover:flex justify-center items-center rounded-[10px] hidden cursor-pointer
         transition-all duration-300 hover:bg-[#ff6a00]">
        
          <CiHeart className='text-[25px]'></CiHeart>
        </div>
        <div className="w-[40px] h-[40px] group-hover:flex justify-center items-center rounded-[10px] hidden cursor-pointer
         transition-all duration-300 hover:bg-[#ff6a00]">
        
          <GoDownload className='text-[25px]'></GoDownload>
        </div>
      </div>
    </div>
  )
}


// border-[#ff6a0033]