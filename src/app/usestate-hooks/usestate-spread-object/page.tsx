'use client'
import React, { useState } from 'react';

interface myObject {
    myName: string;
    myAge: number;
    degree: string
}

const Page = () => {
    const [myObject, setMyObject] = useState<myObject>({
        myName: "Harshal", myAge: 20, degree: "b.tech"
    })
    const UpdateData = () => {
        // setMyObject({ myAge: 19 }) //if i write this so my name & degree can return empty string in jsx so that avoid method we use spread operator
        setMyObject({ ...myObject, myName: "Harshal Kahar", myAge: 19 })

    }
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold text-green-400'>my name is {myObject.myName} , degree is {myObject.degree} & age is {myObject.myAge}</div>
            <button className='text-yellow-400 border border-white p-3' onClick={UpdateData}>
                Update Data
            </button>
        </div>
    )
}

export default Page