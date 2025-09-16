"use client"

import React, { useState, useContext, useEffect } from 'react'
import { MenuCotext } from '@/app/(main)/context/publicDatas';
import Logo from './logo';
import Buttons from './buttons';
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";


export default function Menu() {

    let isLogin

    if(window != undefined){
        isLogin = JSON.parse(localStorage.getItem("isLogin") || "")
    }

    let [smallSize,setSmallSize] = useState(false)
    let { select, setSelect,setMenuSmallSize } = useContext(MenuCotext)


    let changeMenuSize = () => {
        setSmallSize((prev) => !prev)
        setMenuSmallSize((prev) => !prev)
    } 

    let buttons = [
        { id: 1, title: "Explore", Icon: <IoHomeOutline className='text-[25px]' />, selected: select[0]?.selected },
        { id: 2, title: "Search", Icon: <GoSearch className='text-[25px]' />, selected: select[1]?.selected },
        { id: 3, title: "Saved", Icon: <MdFavoriteBorder className='text-[25px]' />, selected: select[2]?.selected },
        { id: 4, title: isLogin ? "Profile" : 'Login/signIn', Icon: isLogin ? <FaRegUser className='text-[25px]' /> : <IoLogInOutline className='text-[25px]'></IoLogInOutline>, selected: select[3]?.selected },
    ]

    return (
        <>
            <div className={`glass fixed top-0 left-0 bottom-0 z-50 ${smallSize ? "w-[4%]" : "w-[20%]"} h-[100vh] border-[#ffffff0f] flex flex-col transition-all duration-300 items-center`}>
                <Logo setSmallSize={changeMenuSize} smallSize={smallSize}></Logo>
                <div className="w-full transition-all duration-300 flex flex-col gap-5 items-center justify-center mt-7">
                    {buttons.map((item) => {
                        return <Buttons smallSize={smallSize} setSelect={setSelect} {...item} key={item.id}></Buttons>
                    })}
                </div>
            </div>
        </>
    )
}
