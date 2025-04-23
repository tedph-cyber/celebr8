'use client'

import React from 'react'
import Countdown from 'react-countdown'

const Completionist = () => <span className="text-3xl font-bold">🎉 It’s time! 🎉</span>

const CountdownTimer = ({ birthday }: { birthday: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 backdrop-blur-sm bg-white/30 rounded-md p-4 text-center">
      <h1 className="text-5xl font-birthday mb-4 animate-shimmer z-10">Countdown to Birthday 🎂</h1>
      <Countdown 
        date={new Date(birthday)}
        renderer={({ days, hours, minutes, seconds, completed }) =>
          completed ? (
            <Completionist />
          ) : (
            <div className="text-4xl space-y-2 animate-shimmer z-10">
              <div>{days}d {hours}h {minutes}m {seconds}s</div>
              <p className="text-lg font-light mt-2">Hold tight… it’s almost time!</p>
            </div>
          )
        }
      />
    </div>
  )
}

export default CountdownTimer
