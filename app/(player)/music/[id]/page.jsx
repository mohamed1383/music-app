"use client"

import React, { useState } from 'react'
import "./style.css"
import * as Slider from '@radix-ui/react-slider';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";

export default function Page() {

  let [isPlay, setIsPlay] = useState(false)
  let [isLiked,setIsLiked] = useState(false)
  let [isBookMark,setIsBookMark] = useState(false)

  return (
    <div className='background flex justify-center items-center w-full h-[100vh]'>
      <div className="flex relative flex-col items-center rounded-[30px] w-[45%] h-[600px]">
        <div className="w-[101.5%] absolute top-0 h-[55%] bg-[#2B2837] border border-[#464646] rounded-[30px] z-20 shadow-[43.48px_32.61px_86.96px_rgba(13,11,17,0.5)]">
          <div className="w-full h-full py-12 pl-10 pr-16 flex">
            <div className="flex items-center gap-10 w-full h-full">
              <div className="w-[35%] h-full flex justify-center items-center rounded-[43px] bg-[#282533] custom_shadow2">
                <Image
                  width={100}
                  height={100}
                  className='w-[80%] h-[80%] border-[#282533] rounded-[10px] border-0 outline-none shadow3'
                  unoptimized
                  alt=''
                  src='/Image/testImage.png'
                ></Image>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#A39EB8] text-[30px] font-semibold">Music name</p>
                <p className="text-[#555067] text-[20px] font-medium">Artist name</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-[25px]">
              <div onClick={() => setIsLiked((prev) => !prev)} className="w-[50px] h-[50px] flex justify-center items-center rounded-full btn_shadow cursor-pointer">
                  <FaHeart className={`text-[25px] transition-all duration-200 ${isLiked ? "text-[#593EC5]" : "text-[rgba(186,175,232,0.21)]"}`} />
              </div>
              <div onClick={() => setIsBookMark((prev) => !prev)} className="w-[50px] h-[50px] flex justify-center items-center rounded-full btn_shadow cursor-pointer">
                  <IoBookmark className={`text-[25px] transition-all duration-200 ${isBookMark ? "text-[#593EC5]" : "text-[rgba(186,175,232,0.21)]"} text-[25px]`}></IoBookmark>
              </div>
              <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full btn_shadow cursor-pointer">
                  <FaDownload className={`text-[rgba(186,175,232,0.21)] text-[25px]`}></FaDownload>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center absolute bottom-0 h-[50%] bg-[#1F1C2B] border border-[#282533] rounded-[30px] shadow-[0px_65.22px_108.7px_rgba(14,12,20,0.5)]">

          <div className="flex flex-col w-full px-[10%]">
            <Slider.Root
              className="relative flex items-center w-full h-6 mt-20"
              max={100}
              step={1}
              aria-label="Volume"
            >

              <Slider.Track className="relative flex-1 h-2 bg-[#0F0C1A] rounded-full">

                <Slider.Range
                  className="absolute left-0 h-full rounded-full bg-gradient-to-r from-[#593EC5] to-[#634AE8]"
                />
              </Slider.Track>


              <Slider.Thumb
                className="relative block w-8 h-8 rounded-full 
               
               bg-gradient-to-r from-[#181322] to-[#2F2840] custom_shadow
               transform transition hover:scale-110 focus:outline-none z-50
               after:absolute after:content-['']  after:w-5 after:h-5  after:bg-red-600
               after:rounded-full after:-z-10 after:inset-[6px] after:bg-gradient-to-r after:from-[#917FF6] after:to-[#3E269F]
               "

                aria-label="Volume"
              />
            </Slider.Root>
            <div className='flex w-full justify-between text-[#58526F] pt-1'>
              <p>00:00</p>
              <p>00:00</p>
            </div>
          </div>

          <div className='flex w-full px-[10%] justify-center gap-[25px] items-center'>


            <div className="w-[60px] cursor-pointer h-[60px] rounded-full flex justify-center items-center bg-[#221F2E] custom_shadow">
              <div className="rounded-full flex items-center justify-center w-[75%] h-[75%] bg-gradient-to-r from-[#917FF6] to-[#3E269F]">
                <FaAngleLeft className='text-[25px] text-white'></FaAngleLeft>
              </div>
            </div>

            <div onClick={() => setIsPlay((prev) => !prev)} className="w-[80px] cursor-pointer h-[80px] rounded-full flex justify-center items-center bg-[#221F2E] custom_shadow">
              <div className="rounded-full flex items-center justify-center w-[75%] h-[75%] bg-gradient-to-r from-[#917FF6] to-[#3E269F]">
                {isPlay ? <FaPause className='text-[35px] text-white'></FaPause> : <FaPlay className='text-[25px] text-white'></FaPlay>}
              </div>
            </div>

            <div className="w-[60px] cursor-pointer h-[60px] rounded-full flex justify-center items-center bg-[#221F2E] custom_shadow">
              <div className="rounded-full flex items-center justify-center w-[75%] h-[75%] bg-gradient-to-r from-[#917FF6] to-[#3E269F]">
                <FaAngleRight className='text-[25px] text-white'></FaAngleRight>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

// text-gradient-to-r from-[#5D24D6] to-[#7E74ED]

