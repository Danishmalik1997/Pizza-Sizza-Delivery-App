import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div className='bg-orange-500 md:text-base md:h-3rem text-center text-sm h-10 px-4 py-4 flex items-center justify-between'>
      <div></div>
      Free Delivery for all orders over ₹100. Order your food now!
      <Link className='text-white text-lg font-bold' href="/login">Login</Link>     
    </div>
  )
}

export default Notification