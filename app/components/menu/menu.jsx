"use client"

import React,{useState,useContext} from 'react'
import { MenuCotext } from '@/app/context/menu';
import Logo from './logo';
import Buttons from './buttons'; 
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";


export default function Menu() {

    
    let {select,setSelect} = useContext(MenuCotext)

    let buttons = [
        { id: 1, title: "Explore", Icon: <IoHomeOutline className='text-[25px]' />, selected: select[0]?.selected},
        { id: 2, title: "Search", Icon: <GoSearch className='text-[25px]' />, selected: select[1]?.selected },
        { id: 3, title: "Saved", Icon: <MdFavoriteBorder className='text-[25px]' />, selected: select[2]?.selected },
        { id: 4, title: "Profile", Icon: <FaRegUser className='text-[25px]' />, selected: select[3]?.selected },
    ]
    
    return (
        <>
            <Logo></Logo>
            <div className="w-full flex flex-col gap-5 items-center justify-center mt-7">
                {buttons.map((item) => {
                    return <Buttons setSelect={setSelect} {...item} key={item.id}></Buttons>
                })}
            </div>
        </>
    )
}
