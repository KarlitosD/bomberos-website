import React from "react"

export function Header(){
    const [images] = useState([''])
    return (
        <header>
            <div className="logoC" images={images}/>
        </header>
    )
}