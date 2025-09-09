import Image from 'next/image'
import React from 'react'

export default function MusicItem() {
  return (
    <div className="flex w-[80%] h-[75px] hover:bg-[#ffffff14] transition-all duration-200 ease-[cubic-bezier(.2,.8,.2,1)]
    hover:border-[#ffffff1f] rounded-[10px] cursor-pointer">

      <div className="flex items-center gap-[15px] ml-[20px]">
        <p>1</p>
        <Image width={48} height={48}></Image>
      </div>
      <div className="flex w-[70%] justify-between items-center ml-[20px] pr-[10px]">
        <div className="flex flex-col">
            <p className="">Retro Future</p>
            <p className="">Synthwave Collective</p>
        </div>
        <p>3:54</p>
      </div>
    </div>
  )
}


//  selectedStyle: bg-[#ff6a001A] border-[#ff6a0033] musicName: text-[#ff6a00]
