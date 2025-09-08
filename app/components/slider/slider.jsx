"use client"

import './sliderStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoPlayOutline } from "react-icons/io5";
import Image from 'next/image';
import { MenuCotext } from '@/app/context/publicDatas';
import React,{useContext} from 'react'

const track = [
    { id: 1, name: "Night Neon" ,artist: "Sample Artist", img: ""},
    { id: 2, name: "Digital Pulse" ,artist: "Cyber Sound", img: ""},
    { id: 3, name: "Midnight Drive" ,artist: "Retro Wave", img: ""},
]

export default function Slider() {

    let {menuSmallSize} = useContext(MenuCotext)

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            // autoplay={{ delay: 5000 }}
            className={`${menuSmallSize ? 'w-[90%]' : 'w-[75%]'} h-[350px] rounded-3xl transition-all duration-300`}
            style={{position: "absolute",top: "5%" , right: "2.5%", border: "1px solid #ffffff0f"}}
        >
            {track.map((item) => {
                return (
                    <SwiperSlide>
                        <div className=" right-0 w-[100%] h-[100%] relative">
                            <Image className='w-full h-full object-fill' width={100} height={100} src={item.img ? "" : "/Image/cover.png"} alt="w-full h-full" />
                            <p className='absolute left-[8%] top-[20%] z-10 text-[#ff6a00]'>Featured Track</p>
                            <h1 className='absolute text-white left-[8%] top-[27%] text-[40px] font-bold'>{item.name}</h1>
                            <h3 className='absolute text-[#b8b8c0] left-[8%] top-[45%]'>{item.artist}</h3>
                            <button className='absolute flex justify-center gap-2 items-center font-semibold transition-all duration-100 hover:bg-[#ff6a00e6] 
                            w-[125px] h-[40px] bg-[#ff6a00] left-[8%] top-[60%] rounded-[10px]'><IoPlayOutline 
                            className='text-[20px]'></IoPlayOutline>play</button>
                        </div>
                    </SwiperSlide>)
            })}
        </Swiper>
    )
}


// 90% 75%