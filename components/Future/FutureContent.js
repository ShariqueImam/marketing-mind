import React from 'react'
import Image from 'next/image';
import FutureDetails from './FutureDetails'

const FutureContent = () => {
    return (
        <div className='w-full flex flex-col sm:flex-row py-8 md:py-16'>
            {/* adding the main data of the content */}
            <section className="flex w-[100%] sm:w-[60%]">
                <FutureDetails />
            </section>
            {/* adding the side image of the content */}
                <section className=' w-[100%] sm:w-[40%] my-12 scale-[0.8] md:scale-[1]'>
                    <Image src={"/desktop.svg"} height={500} width={500} />
                </section>
        </div>
    )
}

export default FutureContent