'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import { useWindowSize } from 'react-use'

// ⛱️ No SSR for Confetti
const Confetti = dynamic(() => import('react-confetti'), {
  ssr: false,
})

const Hero = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
    <div className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-pinky to-purpleNight px-4 wrap text-white">
      <Confetti width={width} height={height} />
      <h1 className="text-6xl text-black dark:text-white md:text-8xl font-birthday drop-shadow-lg mb-4 z-10">
        Happy Birthday, Dad & Mum! 
      </h1>
      <p className="text-xl md:text-2xl text-black dark:text-white font-light max-w-md mx-auto z-10">
        Here’s a little surprise built just for you. Scroll down for memories & love 💖
      </p>
    </div>
    </div>
  )
}

export default Hero
