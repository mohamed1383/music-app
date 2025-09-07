"use client"


import './sliderStyle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import React from 'react'

const track = [
    { id: 1, name: "" ,artist: "", img: ""},
    { id: 2, name: "" ,artist: "", img: ""},
    { id: 3, name: "" ,artist: "", img: ""}
]


export default function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            className='w-[75%] h-[350px] rounded-3xl'
            style={{position: "absolute",top: "5%" , right: "2.5%", border: "1px solid #ffffff0f"}}
        >
            {track.map((item) => {
                return (
                    <SwiperSlide>
                        <div className=" right-0 w-[100%] h-[100%]">
                            <Image className='w-full h-full object-fill' width={100} height={100} src={item.img ? "" : "/Image/cover.png"} alt="w-full h-full" />
                            <p className='absolute'>Featured Track</p>
                            <h1 className='absolute'>{item.name}</h1>
                            <h3 className='absolute'>{item.artist}</h3>
                            <button className=''></button>
                        </div>
                    </SwiperSlide>)
            })}
        </Swiper>
    )
}


// 90% 75%