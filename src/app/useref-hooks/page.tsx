'use client';
import React, { useRef, useState } from 'react'
//uncontrol form

const Page = () => {

    const [show, setShow] = useState<string>("");
    //it like a useState only and its preserve the value,No rerender
    const email: any = useRef(null);

    const SubmitForm = (e: any) => {
        e.preventDefault();
        console.log(email.current.value);
        setShow(email.current.value);
    }
    return (
        <div className='flex flex-col w-full min-h-[100vh] items-center justify-center gap-10 '>
            <form action="" className='bg-gray-950 p-10 mt-24  flex flex-col gap-10 h-[50vh] items-start justify-center border border-gray-900 rounded-xl mt-100' onSubmit={SubmitForm}>
                <div className='text-start flex gap-5'>
                    <label htmlFor="email">Email :</label>
                    <input type="text" name='email' id='email' className=' bg-transparent border' autoComplete='off' ref={email} />
                </div>
                <div className="flex items-center justify-center">
                    <button className='text-yellow-400 border border-white p-3 flex items-center justify-center' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
            {
                show ? <p className='text-base font-medium text-green-400 border border-pink-100 rounded-lg bg-slate-950 flex gap-2 items-center justify-center p-3'>{show}</p> : <p>Please fill up the data</p>

            }
        </div>
    )
}

export default Page