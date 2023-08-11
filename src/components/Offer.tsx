import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* Text container */}
      <div className='flex md:w-[50%] flex-col items-center text-center gap-8 p-6 justify-center'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>
          Delicious Burger & French Fries. 
          </h1>
        <p className='text-white xl:text-xl'> 
        Progressively simplify effective e-toilers and process-centeric
        methods of empowerment. Quickly pontificate parallel. 
        </p>
        <CountDown/>
        <button className='bg-orange-500 text-white rounded-md py-3 px-6'>Order now </button>

      </div>
      {/* Image container */}
      <div className='relative md:w-[50%] w-full md:h-full'>
        <Image src='/offerProduct.png' fill alt='' className='object-contain' />
      </div>
    </div>
  )
}

export default Offer