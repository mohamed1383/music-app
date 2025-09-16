import Image from 'next/image'
import React from 'react'

export default function MusicItem({ id, name, artist, isSelected, setIsSelected }) {
  return (
    <div className={`flex w-[80%] h-[75px] ${isSelected ? "border-[#ff6a0033] border bg-[#ff6a001A] " : "hover:bg-[#ffffff14] hover:border-[#ffffff1f]"}  transition-all duration-200 ease-[cubic-bezier(.2,.8,.2,1)]
     rounded-[10px] cursor-pointer`} onClick={() => {
        setIsSelected(id)
        console.log('sds')
      }}>

      <div className="flex items-center gap-[15px] ml-[20px]">
        <p className={`${isSelected ? 'text-[#ff6a00]' : ''}`}>{id}</p>
        <Image width={48} height={48}></Image>
      </div>
      <div className="flex w-[70%] justify-between items-center ml-[20px] pr-[10px]">
        <div className="flex flex-col">
          <p className={`${isSelected ? "text-[#ff6a00]" : ""}`}>{name}</p>
          <p className="">{artist}</p>
        </div>
        <p>3:54</p>
      </div>
    </div>
  )
}

