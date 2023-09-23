import React from 'react'
import Image from 'next/image';

interface User {
    avatar_url: string;
    login: string;
    gists_url: string;
    followers_url: string;
    following_url: string;
}

interface UserCardProps {
    users: User[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
    return (
        <div className="grid grid-cols-3 gap-10 place-items-center text-black">
            {
                users.map((ele: User, index: any) => {
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
    )
}

export default UserCard