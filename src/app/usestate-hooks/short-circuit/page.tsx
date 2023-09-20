'use client'
import React, { useState } from 'react'

const Page = () => {
    const [demo, setDemo] = useState("");
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <h2 className='text-2xl text-yellow-300'> Short Circuit Evaluations</h2>
            {demo || <div className='text-5xl font-semibold text-gray-300'>Nothing in Demo</div>}

            {
                demo && <div className='text-5xl font-semibold text-gray-300'>{demo} Content in Demo</div>
            }


        </div>
    )
}

export default Page