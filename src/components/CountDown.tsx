'use client'

import React from 'react'
import Countdown from 'react-countdown'


const endingDate = new Date("2023-10-08")
const CountDown = () => {
  return (
    <Countdown className='text-yellow-300 text-5xl' date={endingDate}/>
    
  )
}

export default CountDown