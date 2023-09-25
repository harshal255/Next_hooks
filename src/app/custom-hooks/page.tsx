'use client'
import React, { useState } from 'react'
import useCustomHook from './useCustomHook';


const Page = () => {
    const [count, setCount] = useState(0);
    //custom hook
    useCustomHook(count);


    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold text-green-400'>
                <span>{count}</span>
            </div>
            <button className='text-yellow-400 border border-white p-3' onClick={() => setCount(count + 1)}>Change count</button>
        </div>
    )
}

export default Page
