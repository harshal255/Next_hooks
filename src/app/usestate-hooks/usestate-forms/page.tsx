'use client'
import React, { useState } from 'react'

interface formData {
    email: string;
    password: any;

}

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState<formData[]>([]);

    //onchange methods for handle onchange email and password
    //onsubmit method for submiting form
    const submitForm = (e: any) => {
        e.preventDefault();
        const formData: formData = { email: email, password: password }
        setAllEntry([...allEntry, formData]);
        // console.log(allEntry);
    }


    return (
        <div className='flex flex-col w-full min-h-[100vh] items-center justify-center gap-10 '>
            <form action="" className='bg-gray-950 p-10 mt-24  flex flex-col gap-10 h-[50vh] items-start justify-center border border-gray-900 rounded-xl mt-100' onSubmit={submitForm}>
                <div className='text-start flex gap-5'>
                    <label htmlFor="email">Email :</label>
                    <input type="text" name='email' id='email' className='text-black' autoComplete='off' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className='text-start flex gap-5'>
                    <label htmlFor="password">Password :</label>
                    <input type="text" name='password' id='password' className='text-black' autoComplete='off' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="flex items-center justify-center">
                    {/* type = submit for while user press key enter & then automatically click on submit button or automatically submit form */}
                    <button className='text-yellow-400 border border-white p-3 flex items-center justify-center' type='submit'>
                        Submit
                    </button>
                </div>
            </form>
            {
                allEntry.map((ele, index) => {
                    return <div key={index} className='text-base font-medium text-green-400 border border-pink-100 rounded-lg bg-slate-950 flex gap-2 items-center justify-center p-3'>
                        Email : {ele.email} & password : {ele.password}</div>
                })
            }

        </div>
    )
}

export default Page
