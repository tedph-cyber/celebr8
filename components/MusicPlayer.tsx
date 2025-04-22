"use client"
import React, { useRef, useState } from 'react'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
    } else {
      audio.play().catch((err) => console.log('Autoplay blocked:', err))
    }
    setPlaying(!playing)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="bg-white text-pinky p-3 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Toggle Music"
      >
        {playing ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
      </button>
      <audio ref={audioRef} src="/audio/birthday.mp3" loop preload="auto" />
    </div>
  )
}

export default MusicPlayer
