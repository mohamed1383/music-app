"use client"

import React,{useContext} from 'react'
import MusicCard from '../../section/musicCard'
import { MenuCotext } from '@/app/context/publicDatas'

export default function Result() {

    const {menuSmallSize} = useContext(MenuCotext)

    console.log(menuSmallSize)

    return (
        <div className={`absolute transition-all duration-300 ${menuSmallSize ? "w-[95%]" : "w-[80%]"} right-0 top-[30%] pl-[35px] pr-[35px] pb-10`}>
            <hr className='text-[#ffffff16] mb-10'/>
            <div className="flex gap-[80px] flex-wrap">
                {[...Array(6)].map(() => {
                   return <MusicCard></MusicCard>
                })}
            </div>
        </div>
    )
}
