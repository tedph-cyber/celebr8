'use client'

import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const Fireworks = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5,
        },
      })
    }, 2500) // every few seconds

    return () => clearInterval(interval)
  }, [])

  return null // background effect only
}

export default Fireworks
