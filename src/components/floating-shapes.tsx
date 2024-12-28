'use client'

import { motion } from 'framer-motion'

export function FloatingShapes() {
  const shapes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    color: ['bg-purple-500', 'bg-blue-500', 'bg-pink-500', 'bg-teal-500'][i % 4],
    size: Math.random() * 20 + 10,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.color} opacity-30`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

