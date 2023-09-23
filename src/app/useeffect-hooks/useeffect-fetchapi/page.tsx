'use client';
import React, { useState, useEffect } from 'react'
import NetworkError from '@/app/components/NetworkError';
import Loading from '@/app/components/Loading';
import UserCard from '@/app/components/UserCard';

const Page = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            // console.log(response);
            const data = await response.json();
            // console.log(data);
            setTimeout(() => {
                setUsers(data);
            }, 3000)

        }
        catch (e) {
            setError(true);
            console.log("an error");
        }
    }
    useEffect(() => {
        getUsers();
        console.log(users);
    }, [])

    return (
        <div className='flex flex-col w-full min-h-[100vh] items-center justify-center gap-10 my-10'>
            <div className='text-3xl font-semibold text-violet-500 '>
                List of the Github users :
            </div>
            {/* Multiple ternary operator */}
            {
                error ? <NetworkError />
                    : users.length ? <UserCard users={users}/>
                        : <Loading />
            }
        </div>
    )
}

export default Page