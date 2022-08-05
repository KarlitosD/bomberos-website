import React from "react"
import { useState } from 'react'

export function Header(){
    const [images] = useState(['gg.jpg'])
    return (
        <header>
            <div className="logo" images={images}>
                <p>LOGO</p>
            </div>
        </header>
    )
}