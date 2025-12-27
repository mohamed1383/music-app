import React from 'react'
import { LuUsers } from "react-icons/lu";
import { LuMusic } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const stats = [
    {
        id: 1,
        title: "Total Users",
        value: 2847,
        change: "+12.5%",
        icon: <LuUsers className='text-[#e85e00]'></LuUsers>,
    },
    {
        id: 2,
        title: "Total Songs",
        value: 15234,
        change: "+8.2%",
        icon: <LuMusic className='text-[#e85e00]'></LuMusic>,
    },
    {
        id: 3,
        title: "Total Likes",
        value: 127456,
        change: "+23.1%",
        icon: <FaRegHeart className='text-[#e85e00]'></FaRegHeart>,
    },
    {
        id: 4,
        title: "Active Users",
        value: 1923,
        change: "-5.4%",
        icon: <FaArrowTrendUp className='text-[#e85e00]'></FaArrowTrendUp>,
    }
];

const recentActivities = [
  { id: 1, u: "Sarah Williams", a: "liked",  s: "Electric Pulse",   t: "2m" },
  { id: 2, u: "Michael Chen",  a: "added",  s: "Mountain Echo",    t: "15m" },
  { id: 3, u: "Emma Davis",    a: "liked",  s: "Digital Love",     t: "1h" },
  { id: 4, u: "James Wilson",  a: "liked",  s: "Sunset Boulevard", t: "2h" }
];

const topSongs = [
  { id: 1, t: "Digital Love",     ar: "Synth Masters", l: 4102 },
  { id: 2, t: "Summer Breeze",   ar: "Coastal Vibes", l: 3456 },
  { id: 3, t: "Electric Pulse",  ar: "Neon Waves",    l: 2891 },
  { id: 4, t: "Sunset Boulevard",ar: "West Coast",    l: 2345 }
];


export default function StatCard() {
    return (
        <>
            <div className="w-full flex flex-col gap-2 pl-[350px] pt-[25px]">
                <h1 className='text-[30px] font-bold'>Dashboard</h1>
                <p className='text-[#808080] text-[20px]'>Overview of your music platform</p>
            </div>

            <div className="w-full flex gap-[22px] pl-[350px] pt-[25px]">
                {stats.map((item) => {
                    return (
                        <div key={item.id} className="flex bg-[#0b0b0b] flex-col box-border px-[20px] pt-[20px] w-[23%] min-h-[150px] gap-[30px] border border-[#222222] rounded-[10px]">
                            <div className="flex justify-between items-center">
                                <p className='text-[#808080]'>{item.title}</p>
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-[25px] font-bold">{item.value}</div>
                                <div className="text-[#e85e00]">{item.change} from last month</div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="w-full flex gap-[30px] pl-[350px] pt-[35px] min-h-[450px] box-border">
                <div className="flex flex-col bg-[#0b0b0b] w-[47%] px-[25px] py-[25px] border border-[#222222] rounded-[10px]">
                    <h1 className='text-[20px]'>Recent Activity</h1>
                    {recentActivities.map((activity, index) => {
                        return (
                            <div key={index} className="flex flex-col mt-6 gap-1">
                                <p>{activity.u} {activity.a} <span className='text-[#e85e00]'>{activity.s}</span></p>
                                <p className='text-[#808080] text-[14px]'>{activity.t}</p>
                                {index !== 3 && <hr className='text-[#222222] mt-3'></hr>}
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col bg-[#0b0b0b] w-[47.2%] px-[25px] py-[25px] border border-[#222222] rounded-[10px]">
                    <h1 className='text-[20px]'>Top Songs</h1>
                    {topSongs.map((song, index) => {
                        return (
                            <div key={index} className="flex flex-col mt-[32px] w-full">
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <h1>{song.t}</h1>
                                        <p className='text-[#808080] text-[14px]'>{song.ar}</p>
                                    </div>
                                    <p className='flex items-center gap-2 text-[#e85e00]'><FaHeart></FaHeart> {song.l}</p>
                                </div>
                                <h1></h1>
                                {index !== 3 && <hr className='text-[#222222] mt-3'></hr>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


