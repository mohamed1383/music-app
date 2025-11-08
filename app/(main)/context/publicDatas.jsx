"use client"

import React, { createContext, useState, useEffect } from 'react'

export const MenuCotext = createContext()

export default function MenuPrivorder({ children }) {

    const [select, setSelect] = useState([
        { id: 1, selected: true },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false }
    ]);

    let [menuSmallSize, setMenuSmallSize] = useState(false)

    useEffect(() => {
        const savedBtn = localStorage.getItem("selectedBtn")
        if (savedBtn) {
            setSelect(JSON.parse(savedBtn))
        }
    }, [])

    return (
        <MenuCotext.Provider value={{ select, setSelect, menuSmallSize, setMenuSmallSize }}>
            {children}
        </MenuCotext.Provider>
    )
}
