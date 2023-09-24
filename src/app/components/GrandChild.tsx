import React, { useContext } from 'react'
import BioData from '@/context/bioData'

const GrandChild = () => {
    const name: any = useContext(BioData)
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center gap-10'>
            <div className='text-5xl font-semibold text-gray-500'>Name is {name} from grand parent</div>
            <div className='text-5xl font-semibold text-purple-500'>Name getting by useContext Hook</div>
        </div>
    )
}

export default GrandChild
