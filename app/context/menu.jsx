"use client"

import React, { createContext, useState } from 'react'

export const MenuCotext = createContext()

export default function MenuPrivorder({ children }) {


    const [select, setSelect] = useState([
        { id: 1, selected: true },
        { id: 2, selected: false },
        { id: 3, selected: false },
        { id: 4, selected: false }
    ]);

    return (
        <MenuCotext.Provider value={{ select, setSelect }}>
            {children}
        </MenuCotext.Provider>
    )
}
