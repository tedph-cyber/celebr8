'use client'

import Image from 'next/image'
import frame1 from '@/public/images/9.jpg'
import frame2 from '@/public/images/10.jpg'
import frame3 from '@/public/images/3.jpg'

const images = [frame1, frame2, frame3]

const PictureFrames = () => {
  return (
    <div className="bg-white dark:bg-[#111827] py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center z-10">
      {images.map((img, index) => (
        <div
          key={index}
          className="border-[12px] border-[#f0e6d2] shadow-xl rounded-lg p-1 bg-[#fef9f4] hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <Image
            src={img}
            alt={`Framed Memory ${index + 1}`}
            className="rounded-md object-cover"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  )
}

export default PictureFrames
