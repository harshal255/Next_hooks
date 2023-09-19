'use client'
import React, { useState } from 'react';

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

    const clearData = () => {
        setBioData([]);
    };

    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            {bioData.map((ele) => {
                return (
                    <div key={ele.id} className='text-5xl font-semibold text-orange-700'>
                        Name : {ele.myName} & age : {ele.age}
                    </div>
                );
            })}
            <button
                className='text-yellow-400 border border-white p-3'
                onClick={() => {
                    clearData();
                }}
            >
                Clear Data
            </button>
        </div>
    );
};

export default Page;
