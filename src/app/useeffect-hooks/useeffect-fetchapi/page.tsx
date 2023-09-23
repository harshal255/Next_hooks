'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const Page = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        setUsers(data);
    }
    useEffect(() => {
        getUsers();
        // console.log(users);
    }, [])

    return (
        <div className='flex flex-col w-full min-h-[100vh] items-center justify-center gap-10'>
            <div className='text-3xl font-semibold text-violet-500'>
                List of the Github users :
            </div>
            <div className="grid grid-cols-3 gap-10 place-items-center text-black">
                {
                    users.map((ele: any, index) => {
                        const { avatar_url, login, gists_url, followers_url, following_url } = ele;
                        return (
                            <div className="w-[25rem] h-[12rem] bg-gray-200 flex gap-5 rounded-lg pl-5" key={index}>
                                <div className="flex items-center justify-center w-1/4">
                                    <Image src={avatar_url} alt={login} className='rounded-full bg-green-400' width={100} height={100} />
                                </div>
                                <div className="w-3/4 flex flex-col gap-5 justify-center items-start">
                                    <span className='font-semibold text-xl'>{login}</span>
                                    <span className='font-bold'>Full Stack Developer</span>
                                    <span className="flex justify-evenly gap-5">
                                        <span className='flex flex-col gap-2 justify-center items-center'>
                                            <span>Gist</span>
                                            <span className='font-semibold'>{gists_url.length}</span>
                                        </span>
                                        <span className='flex flex-col gap-2 justify-center items-center'>
                                            <span>Followerse</span>
                                            <span className='font-semibold'>{followers_url.length}</span>
                                        </span>
                                        <span className='flex flex-col gap-2 justify-center items-center'>
                                            <span>Following</span>
                                            <span className='font-semibold'>{following_url.length}</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page