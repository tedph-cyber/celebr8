"use client"
import React from 'react'

const photos = [
  {
    src: '/images/1.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/images/2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/images/3.jpg',
    width: 3,
    height: 4,
  },
]

const MemoryGallery = () => (
  <div className="px-4 py-10 bg-white">
    <h2 className="text-4xl text-center font-birthday text-pinky mb-6">📸 Memory Lane</h2>
  </div>
)

export default MemoryGallery
