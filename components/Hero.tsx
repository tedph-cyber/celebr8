'use client'

import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const Hero = () => {
  const { width, height } = useWindowSize()

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-pinky to-purpleNight text-white">
      <Confetti width={width} height={height} />
      <h1 className="text-6xl text-black dark:text-white md:text-8xl font-birthday drop-shadow-lg mb-4 z-10">
        Happy Birthday, Dad & Mum! 
      </h1>
      <p className="text-xl md:text-2xl text-black dark:text-white font-light max-w-md mx-auto z-10">
        Here’s a little surprise I built just for you. Scroll down for memories & love 💖
      </p>
    </div>
  )
}

export default Hero
