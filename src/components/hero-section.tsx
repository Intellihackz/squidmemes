'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FloatingShapes } from './floating-shapes'

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0f] py-20">
      <FloatingShapes />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0xdNciwvGDAwtaxGt71yCpbjfYu48s.png"
            alt="Meme Squid Game Banner"
            width={800}
            height={200}
            className="mx-auto rounded-2xl"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-2xl font-bold text-white sm:text-4xl"
        >
          Squid Games is the most popular tv series in the history of Netflix.
        </motion.h1>
        <motion.a
          href="https://movepump.com/token/0x07cb109771b913a620f6b89ed27f96ea4b0a009f59f61cd74f71487f9c1ccf71::smemes::SMEMES"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block rounded-full bg-pink-100 px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
        >
          BUY $SMEMES
        </motion.a>
      </div>
    </section>
  )
}

