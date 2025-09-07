"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { GrStatusUnknown } from "react-icons/gr";


export default function Buttons({ id, title = 'title', Icon = GrStatusUnknown, selected = false, setSelect }) {

  let router = useRouter()

  const selectBtn = (e) => {

    setSelect((prev) => prev.map((item) => {
      console.log(item)
      return {
        ...item,
        selected: Number(id) === item.id
      }
    }))

    router.push(`/${title}`)
  }

  return (
    <div id={id} onClick={selectBtn} className={`w-[80%] h-[50px] rounded-[10px] transition-all duration-300 cursor-pointer flex items-center gap-5 box-border pl-4 hover:bg-[#ff6a00] hover:text-white 
        ${selected ? `shadow-[0_0_20px_#ff6a004d] 
         bg-[color-mix(in_oklab,#ff6a00_20%,transparent)]
          outline-[color-mix(in_oklab,#ff6a0080_50%,transparent)] text-[#ff6a00]` : ''}`}>

      {Icon}
      <p className='text-[25px]'>{title}</p>
    </div>
  )
}
