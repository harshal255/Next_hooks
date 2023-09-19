'use client' //converting client component instead of server component to use hooks
import React, { useState } from 'react'

const Page = () => {
    console.log(useState()); //return a array [initial value , function]
    const [newtitle, setNewtitle] = useState("I am a Use State Hook"); //array destructring

    let title = "I am a Use State Hook";


    const updateStatus = () => {
        title = "title can't change using this method, so we can use useState hooks in React/NextJS";
        console.log(title);
        return;
    }
    const updateStatusHooks = () => {
        setNewtitle("I am changed using useState Hook")
        console.log("hello world")
        return;
    }
    return (

        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold'>{
                // title
            }{newtitle}</div>
            <button className='text-yellow-400 border border-white p-3' onClick={() => {
                updateStatus();
                updateStatusHooks();
            }} >Hello World</button>
        </div>
    )
}

export default Page