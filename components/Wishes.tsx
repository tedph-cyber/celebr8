'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const wishes = [
  "You're amazing 🎈",
  "Happy birthday again 💖",
  "More life and success 🌟",
  "You deserve the world 🌍",
  "We love you ❤️",
]

const Wish = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-2xl text-center text-black dark:text-white font-birthday my-10"
    >
      {text}
    </motion.div>
  )
}

const Wishes = () => (
  <div className="py-12 bg-gradient-to-b from-purpleNight to-pinky">
    {wishes.map((wish, idx) => (
      <Wish key={idx} text={wish} />
    ))}
  </div>
)

export default Wishes
