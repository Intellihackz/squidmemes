'use client'

import { motion } from 'framer-motion'
import { Twitter, TextIcon as Telegram } from 'lucide-react'

const socials = [
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://x.com/squidmemesui',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Telegram',
    icon: Telegram,
    href: 'https://t.me/squidmemesui',
    color: 'from-blue-400 to-sky-500'
  }
]

export function SocialLinks() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r ${social.color} p-0.5`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center gap-2 rounded-full bg-black px-6 py-2 transition-transform group-hover:scale-[0.98]">
                <social.icon className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">{social.name}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

