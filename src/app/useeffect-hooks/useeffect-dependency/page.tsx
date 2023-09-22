'use client';
import React, { useState, useEffect } from 'react'

const Page = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("calling useeffect");
        if (count) document.title = `Chats (${count})`;

    }, [count])
    //if dependency = [], so useEffect calling only one time;
    //if dependency = [count], so useEffect calling whenever count update;
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold text-green-400'>
                I am UseEffect Hook
                <span>{count}</span>
            </div>
            <button className='text-yellow-400 border border-white p-3' onClick={() => setCount(count + 1)}>Change count</button>
        </div>
    )
}

export default Page