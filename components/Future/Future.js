import React from 'react'
import FutureContent from './FutureContent'
const Future = () => {
  return (
    <div className='py-12 md:pb-0 md:pt-24 w-full sm:w-[95%] md:w-[85%] h-[80%] flex flex-col sm:m-auto font'>
      {/* add the heading */}
      <section className='m-auto h-[20%] flex'>
        <h2 className='text-3xl sm:text-5xl md:text-5xl text-gray-900 m-auto font-semibold'>HELTHY SEO</h2>
      </section>
      {/* add the main content of the section */}
      <section className="flex h-[80%] w-full">
        <FutureContent/>
      </section>
    </div>
  )
}

export default Future