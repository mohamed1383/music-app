"use client"

import React, { createContext, useState } from 'react'

export const MenuCotext = createContext()

export default function MenuPrivorder({ children }) {

    let selectedBtn 

    if(window != undefined){
        selectedBtn = JSON.parse(localStorage.getItem("selectedBtn"))
    }

    const [select, setSelect] = useState(selectedBtn || [
        { id: 1, selected: true },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false }
    ]);

    let [menuSmallSize,setMenuSmallSize] = useState(false)

    return (
        <MenuCotext.Provider value={{ select, setSelect, menuSmallSize , setMenuSmallSize }}>
            {children}
        </MenuCotext.Provider>
    )
}
