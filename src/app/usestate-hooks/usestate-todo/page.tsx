'use client'
import React, { useState } from 'react';
import { MdOutlineFolderDelete } from 'react-icons/md'

interface BioData {
    id: number;
    myName: string;
    age: number;
}

const Page = () => {
    const [bioData, setBioData] = useState<BioData[]>([
        { id: 0, myName: 'Harshal', age: 20 },
        { id: 1, myName: 'Harshal Kahar', age: 19 },
    ]);

    const removeTodo = (id: number) => {
        // alert(id);
        let filterdData = bioData.filter((ele) => ele.id !== id)
        setBioData(filterdData);
        // console.log(filterdData);
        return;
    };

    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            {bioData.map((ele) => {
                return (
                    <div key={ele.id} className='text-3xl font-medium text-violet-500 border border-pink-100 rounded-lg bg-slate-950 flex gap-5 items-center justify-center p-5'>
                        Name : {ele.myName} & age : {ele.age}
                        {/* if i doesn't use anonymous/callback function in onClick, then removeTodo function call automatically , so prevent that i use anonymous/callback function */}
                        <MdOutlineFolderDelete className=" text-red-600 cursor-pointer" onClick={() => removeTodo(ele.id)} />
                    </div>
                );
            })}

        </div>
    );
};

export default Page;
