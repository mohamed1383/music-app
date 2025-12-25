"use client"

import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";

let openInput
let closeInput
let [overflowLayout, setOverflow] = []


export default function Input() {

  let [isOpen, setIsOpen] = useState(false)
  [overflowLayout, setOverflow] = useState(false)

  useEffect(() => {

    try {
      if (isOpen) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      }
    } catch (e) {

    }

    return () => {
      try {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
      } catch (e) { }
    }
  }, [isOpen])

  openInput = () => {
    setIsOpen((prev) => !prev)
  }

  closeInput = () => {
    try {
      setIsOpen(false)
    } catch (e) { }
  }

  return (
    <>
      <div className={`absolute rounded-[10px] justify-center items-center border border-[#222] bg-[#0b0b0b] top-0 right-0 bottom-0 
          left-0 m-auto flex flex-col px-[10%] w-[542px] h-[520px] z-50 pb-10 pt-8 ${!isOpen ? 'hidden' : ''}`}>

        <div className="flex w-[433px] justify-between items-center box-border mb-[25px]">
          <p className="text-[22px] font-bold">Add New Song</p>
          <IoClose onClick={() => setIsOpen(false)} className='text-[20px] cursor-pointer'></IoClose>
        </div>

        <div className="flex flex-col w-[433px] box-border gap-5">

          <div className="flex flex-col gap-2">
            <p>Title</p>
            <input type="text" className="h-[35px] rounded-[5px] text-[#eee] bg-[#1616164D] border border-[#222] 
            outline-none transition duration-300 focus:border-[#ff6a00] box-border pl-3"  />

          </div>

          <div className="flex flex-col w-full gap-2">
            <p>Artist</p>

            <input type="text" className="w-full h-[35px] rounded-[5px] outline-none transition duration-300 text-[#eee] bg-[#1616164D] focus:shadow-[0_0_0_3px_#ff6a0066] 
            focus:border-[#ff6a00] border border-[#222] box-border pl-3" />
          </div>

          <div className="flex flex-col w-full gap-2">
            <p>Upload Date</p>
            <input type="date" className="w-full h-[35px] rounded-[5px] text-[#eee] bg-[#1616164D] border border-[#222] 
            outline-none transition duration-300 focus:border-[#ff6a00] box-border pl-3" />

          </div>

          <div className="flex flex-col w-full gap-2">
            <p>Likes</p>
            <input type="number" className="w-full h-[35px] rounded-[5px] text-[#eee] bg-[#1616164D] border border-[#222]
             outline-none transition duration-300 focus:border-[#ff6a00] box-border pl-3 pr-5" />

          </div>

        </div>

        <div className="flex mt-10 gap-5 w-[433px] justify-end">
          <div onClick={() => openInput()} className="w-[90px] text-center p-[10px] rounded-[5px] cursor-pointer border border-[#222] font-medium">Cancel</div>
          <div className="w-[90px] text-center rounded-[5px] text-black p-[10px] bg-[color-mix(in_oklab,#e85e00_90%,transparent)] cursor-pointer font-medium">Create</div>
        </div>
      </div>

      <div className={`absolute top-0 right-0 bottom-0 left-0 bg-[#0000008c] ${!isOpen ? 'hidden' : ''}`}></div>
    </>
  )
}

export { openInput, closeInput, overflowLayout, setOverflow }