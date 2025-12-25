"use client"

import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi2";
import { openInput, closeInput } from "../addMusicInput/input";
import { openBox } from "../deleteBox/deleteBox";
import { useEffect } from 'react';

export default function MusicTable() {

  useEffect(() => {
    return () => {
      try {
        if (typeof closeInput === 'function') closeInput()
      } catch (e) {
        console.error('Error closing input on unmount:', e)
      }
    }
  }, [])

  const musicList = [
    { id: 1, title: "Mountain Echo", artist: "Nature Sounds", uploadDate: "2024-03-05", likes: 967 },
    { id: 2, title: "Midnight Dreams", artist: "Luna Eclipse", uploadDate: "2024-01-10", likes: 1247 },
    { id: 3, title: "Rainy Day", artist: "Acoustic Soul", uploadDate: "2024-04-22", likes: 1678 },
    { id: 4, title: "Urban Nights", artist: "City Lights", uploadDate: "2024-02-14", likes: 1823 },
    { id: 5, title: "Sunset Boulevard", artist: "West Coast", uploadDate: "2024-04-08", likes: 2345 },
    { id: 6, title: "Electric Pulse", artist: "Neon Waves", uploadDate: "2024-01-15", likes: 2891 },
    { id: 7, title: "Summer Breeze", artist: "Coastal Vibes", uploadDate: "2024-02-01", likes: 3456 },
    { id: 8, title: "Digital Love", artist: "Synth Masters", uploadDate: "2024-03-20", likes: 4102 },
    { id: 9, title: "Night Drive", artist: "Retro Motion", uploadDate: "2024-04-18", likes: 1987 },
    { id: 10, title: "Crystal Skies", artist: "Ambient Flow", uploadDate: "2024-05-01", likes: 1523 },
  ];


  return (
    <div className='w-[95%] flex flex-col justify-start items-center pt-[100px] pl-[297px] pb-[50px]'>

      <div className='w-full max-w-[1400px] flex flex-col mb-[35px]'>
        <h1 className='text-[35px] font-bold'>Music Library</h1>
        <p className="text-[#808080]">Manage songs and track performance</p>
      </div>

      <div className='w-full max-w-[1400px] flex justify-between mb-[60px]'>
        <div className="flex relative items-center">
          <CiSearch className="absolute left-[15px] text-[20px]"></CiSearch>
          <input className='focus:border-[#ff6a00] w-[350px] h-[50px] text-lg color-[#eee] rounded-md bg-[#0b0b0b] 
              transition duration-150 box-border pl-[45px] border-[#222] border outline-none searchInput'

            placeholder="Search song or artist..."
            type="search" name="" id="" />
        </div>

        <button onClick={() => {

          try {
            if (typeof openInput === 'function') openInput()
          } catch (e) {
            console.error('Error toggling overflow/openInput:', e)
          }

        }} className="bg-[#e85e00] mr-10 cursor-pointer rounded-[10px] px-5 text-black flex gap-[15px] items-center"><span className="text-3xl">+</span> <span className="text-[25px]">Add Song</span></button>

      </div>

      <table className="w-full max-w-[1400px] border border-[#222222] rounded-lg border-separate border-spacing-0">
        <thead>
          <tr className='rounded-t-lg w-[100px] h-[80px] text-[#e85e00] bg-[color-mix(in_oklab,_#e85e00_10%,_transparent)]'>
            <th className='text-lg w-[10%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] rounded-tl-[8px] border-b border-[#e85e00]'>Song ID</th>
            <th className='text-lg w-[25%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Title</th>
            <th className='text-lg w-[25%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Artist</th>
            <th className='text-lg w-[15%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Upload Date</th>
            <th className='text-lg w-[15%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Likes</th>
            <th className='text-lg w-[10%] transition duration-150 rounded-tr-[8px] border-b border-[#e85e00]'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {musicList.map((data, index) => {
            return (
              <tr key={index} className='rounded-b-lg transiton duration-150 hover:bg-[#E85E000D] h-[80px]'>
                <td className='w-[10%] border-b border-b-[#222222] text-center'>{data.id}</td>
                <td className='w-[25%] border-b border-b-[#222222] text-center'>{data.title}</td>
                <td className='w-[25%] text-[#808080] border-b border-b-[#222222] text-center'>{data.artist}</td>
                <td className='w-[15%] text-[#808080] border-b border-b-[#222222] text-center'>{data.uploadDate}</td>
                <td className='w-[15%] border-b border-b-[#222222] text-center'><FaHeart className="text-[#e85e00] inline mr-2" /> {data.likes}</td>
                <td className='w-[10%] h-full text-center border-b border-b-[#222222]'>
                  <div className="flex justify-center gap-5">

                    <LuPencil onClick={() => {
                      try {
                        if (typeof openInput === 'function') openInput()
                      } catch (e) {
                        console.error('Error toggling overflow/openInput:', e)
                      }
                    }} className="text-[#e85e00] cursor-pointer"></LuPencil>

                    <HiOutlineTrash onClick={() => {
                      try {
                        if (typeof openBox === 'function') openBox()
                      } catch (e) {
                        console.error('Error toggling overflow/openBox:', e)
                      }
                    }} className="text-[#ff2c2c] cursor-pointer"></HiOutlineTrash>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}



