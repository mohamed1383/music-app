"use client"

import React, { useEffect, useState } from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { PiMusicNotesSimpleLight } from "react-icons/pi";
import { useRouter } from 'next/navigation';

export default function Buttons() {

    let router = useRouter()

    let [isLoad,setIsload] = useState(false)

    let btns = [
        { btn: <MdOutlineDashboard className="text-[25px]"></MdOutlineDashboard> },
        { btn: <TbUsers className="text-[25px]"></TbUsers> },
        { btn: <PiMusicNotesSimpleLight className="text-[25px]"></PiMusicNotesSimpleLight> },
    ]

    let [buttons, setButton] = useState([
        { id: 1, title: "Dashboard", isSelected: true },
        { id: 2, title: "Users", isSelected: false },
        { id: 3, title: "Music", isSelected: false }
    ])

    useEffect(() => {
        let routes = JSON.parse(localStorage.getItem("route"))

        if (routes) setButton(routes)
        setIsload(true)

        return () => {
            localStorage.removeItem("route")
        }
    }, [])

    const selectPage = (btnId, title) => {
        setButton((prev) => {
            let newValue = prev.map((item) => {
                return { ...item, isSelected: item.id == btnId }
            })

            localStorage.setItem("route", JSON.stringify(newValue))
            return newValue
        })

        setTimeout(() => {
            router.push(title.toLowerCase())
        }, 75)
    }

    return (
        <>
            {
                isLoad ?  buttons?.map((item, index) => {
                    return (
                        <div key={item.id} id={item.id} onClick={(e) => selectPage(e.currentTarget.id, item.title)} className={`w-[80%] h-[45px] transition-all duration-300  
                            mx-5 flex box-border pl-3 cursor-pointer items-center gap-[15px] 
                            mt-5 rounded-[8px] ${item.isSelected ? "bg-[#e85e00] text-black" : "hover:bg-[#161616]"}`}>

                            {btns[index].btn} <span className="text-[20px]">{item.title}</span>
                        </div>
                    )
                }) : ""
            }
        </>
    )
}
