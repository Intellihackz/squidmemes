'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: "1",
    text: "Download / Install Sui wallet",
    icon: "💼",
  },
  {
    number: "2",
    text: "Add Sui's",
    icon: "💰",
  },
  {
    number: "3",
    text: "Go To Movepump BUY $SMEMES",
    icon: "🚀",
  },
]

export function HowToBuy() {
  return (
    <section className="relative bg-gradient-to-b from-black to-purple-900 py-20">
      <div className="relative mx-auto max-w-4xl px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          How to Buy
        </motion.h2>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-8 flex items-center gap-6"
            >
              <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-3xl">
                {step.icon}
              </div>
              <div className="flex-1 rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-2 text-xl font-semibold text-white">Step {step.number}</h3>
                <p className="text-lg text-gray-300">{step.text}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <a 
              href="https://movepump.com/token/0x07cb109771b913a620f6b89ed27f96ea4b0a009f59f61cd74f71487f9c1ccf71::smemes::SMEMES"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:from-blue-600 hover:to-purple-600"
            >
              Get Started
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

