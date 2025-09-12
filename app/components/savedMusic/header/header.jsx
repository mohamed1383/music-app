"use client"

import React,{useState} from 'react'
import { FiPlus } from "react-icons/fi";

export default function Header() {

    let [filters,setFilters] = useState([
        {id: 1 , title: "Songs" , selected: true},
        {id: 2 , title: "Playlist" , selected: false},
        {id: 3 , title: "Albums" , selected: false},
        {id: 4 , title: "Artist" , selected: false}
    ])

    const selectFilter = (id) => {
        setFilters((prev) => prev.map((item) => {
            return {...item,selected: id == item.id}
        }))
    }

    return (
        <>
            <div className='absolute flex justify-between top-0 right-0 px-[40px] pt-[30px] w-[80%]'>
                <h1 className='text-[35px] font-bold'>Your Library</h1>
                <div className="w-[11%] h-[45px] transition-all duration-300 hover:bg-[#ff6a00cf]
       text-white cursor-pointer bg-[#ff6a00] flex justify-between px-2 items-center rounded-[10px]">

                    <FiPlus></FiPlus>
                    <p className='font-semibold'>Create Playlist</p>
                </div>
            </div>

            <div className="absolute flex flex-col w-[80%] h-[1px] top-[15%] right-0 px-[40px]">

                <div className="flex gap-[15px]">
                    {filters.map((item) => 
                    <div onClick={() => selectFilter(item.id)} key={item.id} className={`w-[100px] cursor-pointer transition-all duration-300 hover:bg-[#ff6a00] 
                    leading-[45px] h-[45px] text-[18px] text-center
                     ${item.selected ? "border-b-[2px] border-[#ff6a00] text-[#ff6a00] hover:text-white" : 'border-b-[2px] border-transparent'}`}>{item.title}</div>)}

                </div>
                <div className="w-full h-[1px] border-b-[1px] border-[#ffffff17]"></div>
            </div>
        </>
    )
}


// border-b-[1px] border-[#ffffff0f]