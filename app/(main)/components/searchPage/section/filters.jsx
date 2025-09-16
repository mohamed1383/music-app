"use client"

import { IoClose } from "react-icons/io5";
import React, { useEffect, useState, useContext } from 'react'
import { MenuCotext } from "@/app/(main)/context/publicDatas";

export default function Filters() {

    const {menuSmallSize} = useContext(MenuCotext)


    const [categories, setCategories] = useState([
        { id: 1, label: "Electronic", selected: false },
        { id: 2, label: "Synthwave", selected: false },
        { id: 3, label: "Ambient", selected: false },
        { id: 4, label: "Liked", selected: false },
        { id: 5, label: "Recently Played", selected: false },
    ]);

    const selectCategory = (id) => {
        setCategories((prev) => prev.map((item) => {
            if(item.id == id) return {...item,selected: !item.selected}
            return item
        }) )
    }

    return (
        <div className={`flex gap-[10px] transition-all duration-300 absolute right-0 top-[20%] ${menuSmallSize ? "w-[95%]" : "w-[80%]"} pl-[35px] items-center`}>
            <p className="text-2xl">filters:</p>
            <div className="flex gap-5 ml-5">
                {categories.map((item) => {
                    return (<div onClick={() => selectCategory(item.id)} className={`border flex transition-all 
                    duration-300 hover:bg-[#ff6a00] ${item.selected ? "bg-[#3b1d05] border-[#ff6a00]" : "border-[#ffffff0f]"} 
                    justify-center items-center gap-[20px] px-3 py-2 rounded-[10px] group cursor-pointer`}>
                    
                                <p className={`${item.selected ? "text-[#ff6a00]" : ""} group-hover:text-white`}>{item.label}</p>
                                <IoClose className={item.selected ? "text-white" : "hidden"}></IoClose>
                    </div>)
                })}
            </div>
        </div>
    )
}
