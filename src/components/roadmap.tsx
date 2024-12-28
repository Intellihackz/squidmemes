'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const phases = [
  {
    title: "Phase 1: Late Launch",
    items: [
      "On Board Influencers",
      "Get Building On Twitter",
      "Build A Community",
      "1000 Holders",
      "100k Mc",
    ]
  },
  {
    title: "Phase 2: More Influencers",
    items: [
      "More Memes",
      "Apply For Cex Listings",
      "10,000 Holders",
      "1 Mil Mc",
    ]
  },
  {
    title: "Tokenomics",
    items: [
      "Token Supply 10B",
      "Buy/Sell",
      "Contract Movepump",
    ]
  }
]

const mascotImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sq8UZmTZ8NwsDm4b1aYL6sOp5frEcw.png"
const groupImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ULWRxs1JmDtfvaMViOb0fTFHaZ5szZ.png"

export function Roadmap() {
  return (
    <section className="bg-gradient-to-b from-purple-900 to-black py-20">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center gap-4"
        >
          <h2 className="text-center text-4xl font-bold text-white">Roadmap</h2>
          <Image
            src={mascotImage}
            alt="Mascot Characters"
            width={120}
            height={60}
            className="object-contain"
          />
        </motion.div>
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                <Image
                  src={groupImage}
                  alt="Squid Game Characters"
                  width={150}
                  height={150}
                  className="mb-4 rounded-lg object-cover md:mb-0"
                />
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-bold text-white">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        className="flex items-center text-gray-300"
                      >
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

