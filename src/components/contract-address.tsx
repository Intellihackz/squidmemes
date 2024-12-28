'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x07cb109771b913a620f6b89ed27f96ea4b0a009f59f61cd74f71487f9c1ccf71::smemes::SMEMES"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h3 className="mb-1 text-sm font-medium text-gray-400">Contract Address</h3>
              <p className="break-all text-sm text-white">{contractAddress}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 rounded-full bg-purple-500/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-500/30"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

