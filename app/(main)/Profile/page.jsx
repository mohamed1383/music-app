"use client"

import React, { useContext, useEffect } from 'react'
import { MenuCotext } from '../context/publicDatas'
import Login from '../components/profile-login/login'
import Profile from '../components/profile-login/profile'

export default function page() {

  let isLogin

  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin") || "false")
  },[])

  let { menuSmallSize } = useContext(MenuCotext)

  return (
    <div className={`absolute flex justify-center transition-all duration-300 items-center top-0 right-0 ${menuSmallSize ? "w-[95%]" : "w-[80%]"} h-[100%]`}>
      {isLogin ? <Profile></Profile> : <Login></Login>}
    </div>
  )
}
