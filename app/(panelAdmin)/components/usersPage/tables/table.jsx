"use client"

import { CiSearch } from "react-icons/ci";
import { RiEyeLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi2";
import { openInput, closeInput } from "../addUserInput/input";
import { openBox,closeBox } from "../deleteBox/deleteBox";
import { useEffect } from 'react';

export default function Table() {

  useEffect(() => {
    return () => {
      try {
        if (typeof closeInput === 'function') closeInput()
      } catch (e) {
        console.error('Error closing input on unmount:', e)
      }
    }
  }, [])

  let users = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", signupDate: "2024-01-15", likedSongs: 42 },
    { id: 2, name: "Sarah Williams", email: "sarah@example.com", signupDate: "2024-02-20", likedSongs: 128 },
    { id: 3, name: "Michael Chen", email: "michael@example.com", signupDate: "2024-03-10", likedSongs: 67 },
    { id: 4, name: "Emma Davis", email: "emma@example.com", signupDate: "2024-03-25", likedSongs: 93 },
    { id: 5, name: "James Wilson", email: "james@example.com", signupDate: "2024-04-05", likedSongs: 156 },
    { id: 6, name: "Olivia Brown", email: "olivia@example.com", signupDate: "2024-04-18", likedSongs: 84 },
    { id: 7, name: "Daniel Martinez", email: "daniel@example.com", signupDate: "2024-05-02", likedSongs: 71 },
    { id: 8, name: "Sophia Garcia", email: "sophia@example.com", signupDate: "2024-05-15", likedSongs: 112 },
    { id: 9, name: "Sophia Garcia", email: "sophia@example.com", signupDate: "2024-05-15", likedSongs: 112 },
    { id: 10, name: "Sophia Garcia", email: "sophia@example.com", signupDate: "2024-05-15", likedSongs: 112 }
  ]

  return (
    <div className='w-[95%] flex flex-col justify-start items-center pt-[100px] pl-[200px] pb-[50px]'>

      <div className='w-full max-w-[1400px] flex flex-col mb-[35px]'>
        <h1 className='text-[35px] font-bold'>Users</h1>
        <p className="text-[#808080]">Manage registered users and their activity</p>
      </div>

      <div className='w-full max-w-[1400px] flex justify-between mb-[60px]'>
        <div className="flex relative items-center">
          <CiSearch className="absolute left-[15px] text-[20px]"></CiSearch>
          <input className='focus:border-[#ff6a00] w-[350px] h-[50px] text-lg color-[#eee] rounded-md bg-[#0b0b0b] 
              transition duration-150 box-border pl-[45px] border-[#222] border outline-none searchInput'

            placeholder="Search Users..."
            type="search" name="" id="" />
        </div>

        <button onClick={() => {

          try {
            if (typeof openInput === 'function') openInput()
          } catch (e) {
            console.error('Error toggling overflow/openInput:', e)
          }
          
        }} className="bg-[#e85e00] mr-10 cursor-pointer rounded-[10px] px-5 text-black flex gap-[15px] items-center"><span className="text-3xl">+</span> <span className="text-[25px]">Add User</span></button>

      </div>

      <table className="w-full max-w-[1400px] border border-[#222222] rounded-lg border-separate border-spacing-0">
        <thead>
          <tr className='rounded-t-lg w-[100px] h-[80px] text-[#e85e00] bg-[color-mix(in_oklab,_#e85e00_10%,_transparent)]'>
            <th className='text-lg w-[10%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] rounded-tl-[8px] border-b border-[#e85e00]'>User ID</th>
            <th className='text-lg w-[25%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Name</th>
            <th className='text-lg w-[25%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Email</th>
            <th className='text-lg w-[15%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Signup Date</th>
            <th className='text-lg w-[15%] transition duration-150 cursor-pointer hover:bg-[#e85e0033] border-b border-[#e85e00]'>Liked Songs</th>
            <th className='text-lg w-[10%] transition duration-150 rounded-tr-[8px] border-b border-[#e85e00]'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((data, index) => {
            return (
              <tr key={index} className='rounded-b-lg transiton duration-150 hover:bg-[#E85E000D] h-[80px]'>
                <td className='w-[10%] border-b border-b-[#222222] text-center'>{data.id}</td>
                <td className='w-[25%] border-b border-b-[#222222] text-center'>{data.name}</td>
                <td className='w-[25%] text-[#808080] border-b border-b-[#222222] text-center'>{data.email}</td>
                <td className='w-[15%] text-[#808080] border-b border-b-[#222222] text-center'>{data.signupDate}</td>
                <td className='w-[15%] border-b border-b-[#222222] text-center'>{data.likedSongs}</td>
                <td className='w-[10%] h-full text-center border-b border-b-[#222222]'>
                  <div className="flex justify-center gap-5">
                    <RiEyeLine className="text-[#e85e00] cursor-pointer"></RiEyeLine>

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



