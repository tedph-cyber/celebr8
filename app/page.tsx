'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import MemoryGallery from '@/components/Gallery'
import Fireworks from '@/components/Fireworks'
import MusicPlayer from '@/components/MusicPlayer'
import Wishes from '@/components/Wishes'
import ThemeSwitch from '@/components/Themeswitch'
import BirthdayChatbox from '@/components/BirthdayChatbox'
import PictureFrames from '@/components/PictureFrames'

// 👇 dynamically import CountdownTimer to disable SSR
const CountdownTimer = dynamic(() => import('@/components/Countdown'), {
  ssr: false,
})


export default function Home() {
  const today = new Date()
  const birthday = new Date('2025-04-24T00:00:00')

  const isBirthday = today.toDateString() === birthday.toDateString()

  return (
    <>
      {!isBirthday ? (
        <CountdownTimer birthday={birthday.toISOString()} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Fireworks />
          <ThemeSwitch />
          <MusicPlayer />
          <Hero />
          <PictureFrames />
          <Wishes />
          <MemoryGallery />
          <BirthdayChatbox />
        </div>
      )}
    </>
  )
}
