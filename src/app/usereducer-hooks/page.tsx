'use client';
import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer';


const Page = () => {
    //usestate = local & usereducer = globally state management
    //dispatch = what we want to perform action
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold text-blue-500'>{state}</div>
            <div className="flex gap-5">
                <button className='text-yellow-400 border border-white p-3' onClick={() => {
                    dispatch({ type: "Increment" })
                }}>+</button>
                <button className='text-yellow-400 border border-white p-3' onClick={() => {
                    dispatch({ type: "Decrement" })
                }}>-</button>
            </div>
        </div>
    )
}

export default Page
