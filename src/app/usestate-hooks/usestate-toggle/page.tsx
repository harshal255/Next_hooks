'use client' //converting client component instead of server component to use hooks
import React, { useState } from 'react'

const Toggle = () => {
    console.log(useState()); //return a array [initial value , function]
    const [newtitle, setNewtitle] = useState("I am a Use State Hook"); //array destructring


    const updateStatusHooks = () => {
        let val = newtitle;
        val === 'I am a Use State Hook' ? setNewtitle('I am changed using useState Hook') : setNewtitle('I am a Use State Hook');
        return;
    }
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold'>{
                // title
            }{newtitle}</div>
            <button className='text-yellow-400 border border-white p-3' onClick={() => {
                updateStatusHooks();
            }} >Hello World</button>
        </div>
    )
}

export default Toggle;