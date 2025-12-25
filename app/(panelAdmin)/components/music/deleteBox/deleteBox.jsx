"use client"

import React, { useState, useEffect } from 'react'

let openBox
let closeBox
let [overflowLayout, setOverflow] = []

export default function DeleteBox() {

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

  openBox = () => {
    setIsOpen((prev) => !prev)
  }

  closeBox = () => {
    try {
      setIsOpen(false)
    } catch (e) { }
  }


  return (
    <>
      <div className={`absolute rounded-[10px] justify-center items-center border border-[#222] bg-[#0b0b0b] top-0 right-0 bottom-0 
                      left-0 m-auto flex flex-col px-[10%] w-[542px] h-[200px] z-50 py-[110px] ${!isOpen ? 'hidden' : ''}`}>

        <div className="flex flex-col w-[433px] box-border gap-5">
          <h1>Delete User</h1>
          <p className='text-[#808080]'>Are you sure you want to delete this user? This action cannot be undone.</p>
        </div>

        <div className="flex mt-10 gap-5 w-[433px] justify-end">
          <div onClick={() => openBox()} className="w-[90px] text-center p-[10px] rounded-[5px] cursor-pointer border border-[#222] font-medium">Cancel</div>
          <div className="w-[90px] text-center rounded-[5px] text-white p-[10px] bg-[#d40924] cursor-pointer font-medium">Delete</div>
        </div>
      </div>

      <div className={`absolute top-0 right-0 bottom-0 left-0 bg-[#0000008c] ${!isOpen ? 'hidden' : ''}`}></div>
    </>
  )
}

export { openBox, closeBox, }
