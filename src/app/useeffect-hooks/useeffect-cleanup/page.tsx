'use client';
import React, { useState, useEffect } from 'react'

const Page = () => {
    const [width, setWidth] = useState(window.screen.width);

    const actualWidth = () => {
        // console.log(window.innerWidth);
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth);
        console.log("add event")

        return () => {
            window.removeEventListener("resize", actualWidth);
            console.log("remove event")
        }
    })
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold text-green-400'>
                The actual size of the window is :
            </div>
            <button className='text-yellow-400 border border-white p-3'>{width} px</button>
        </div>
    )
}

export default Page
