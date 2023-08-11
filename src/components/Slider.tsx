'use client'
import Image from 'next/image'
import React from 'react'
import {useState, useEffect }from 'react'

const data = [ 
  {
    id:1, 
    title : 'always hot & always fresh & always crispy',
    image : '/slide1.png',
  },
  {
    id:2, 
    title : 'The Taste which you want more !',
    image : '/slide2.png',
  },
  {
    id:3, 
    title : 'We deliverd in whole NCR ',
    image : '/slide3.jpg',
  }
]
const Slider = () => {
  const[slider, setSlider] = useState(0) 

//   useEffect(()=> {
//     const interval = setInterval(()=>{ 
//       setSlider((prev)=> (prev === data.length-1 ? 0 : prev+1 ))
//     },2000)
//     return ()=> clearInterval(interval); 
// },[])
  

  return (
    <div className=' bg-fuchsia-50 gap-14 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
      {/* Text Container */}
      <div className=' lg:h-full flex flex-1 items-center justify-center flex-col font-bold gap-8 text-orange-600'>
        <h1 className='text-5xl text-center uppercase p-4 md:text-6xl lg:text-7xl'>
           {data[slider].title}
        </h1>
        <button className='bg-orange-500 text-white py-4 px-8 rounded-2xl'>Order Now</button>
      </div>
      {/* Image Container */}
      <div className='w-full lg:h-full relative flex-1'>
        <Image src={data[slider].image} alt='' fill className='object-cover'/> 
      </div>
    </div>
  )
}

export default Slider