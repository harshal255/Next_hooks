'use client';
import Parent from '@/app/components/Parent'
import BioData from '@/context/bioData'

const Page = () => {
    return (
        <BioData.Provider value={"Harshal Kahar"}>
            <Parent />
        </BioData.Provider>
    )
}

export default Page



