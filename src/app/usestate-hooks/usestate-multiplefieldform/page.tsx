'use client'
import { setuid } from 'process';
import React, { useState } from 'react'

interface userData {
    username: string;
    mobile: number | string;
    email: string;
    password: any;
}

const Page = () => {
    const [userData, setUserData] = useState<userData>({
        username: "",
        mobile: "",
        email: "",
        password: "",
    })
    const [records, setRecords] = useState<userData[]>([]);
    const handleInput = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        //[name] is dynamic data in below object
        setUserData({ ...userData, [name]: value })
    }

    const submitForm = (e: any) => {
        e.preventDefault();
        if (userData.email && userData.mobile && userData.password && userData.username) {
            const newData = { ...userData }
            setRecords([...records, newData]);
            setUserData({
                username: "",
                mobile: "",
                email: "",
                password: "",
            })
        }
        // console.log(records,userData);
    }

    const clearData = () => {
        setRecords([]);
    }

    return (
        <div className='flex flex-col w-full min-h-[100vh] items-center justify-center gap-10 '>
            <form action="" className='bg-gray-950 p-10 mt-24  flex flex-col gap-10 max-h-full min-h-[50vh] items-start justify-center border border-gray-900 rounded-xl mt-100' onSubmit={submitForm}>
                <div className='text-start flex gap-5'>
                    <label htmlFor="username">Username :</label>
                    <input type="text" name='username' id='username' className=' bg-transparent border' autoComplete='off' value={userData.username} onChange={handleInput} />
                </div>
                <div className='text-start flex gap-5'>
                    <label htmlFor="mobile">Mobile :</label>
                    <input type="phone" name='mobile' id='mobile' className=' bg-transparent border' autoComplete='off' value={userData.mobile} onChange={handleInput} />
                </div>
                <div className='text-start flex gap-5'>
                    <label htmlFor="email">Email :</label>
                    <input type="text" name='email' id='email' className=' bg-transparent border' autoComplete='off' value={userData.email} onChange={handleInput} />
                </div>
                <div className='text-start flex gap-5'>
                    <label htmlFor="password">Password :</label>
                    <input type="text" name='password' id='password' className='bg-transparent border' autoComplete='off' value={userData.password} onChange={handleInput} />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <button className='text-yellow-400 border border-white p-3 flex items-center justify-center' type='submit'>
                        Submit
                    </button>
                    <button className='text-yellow-400 border border-white p-3 flex items-center justify-center' type='button' onClick={clearData}>
                        Clear
                    </button>
                </div>
            </form>
            {
                records.map((ele, index) => {
                    //destructuring
                    const { username, mobile, email, password } = ele;
                    return <div key={index} className='text-base font-medium text-green-400 border border-pink-100 rounded-lg bg-slate-950 flex gap-2 items-center justify-center p-3'>username : {username}, Mobile : {mobile}, Email : {email} & password : {password}</div>
                })
            }

        </div>
    )
}

export default Page
