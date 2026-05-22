"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Star } from "lucide-react"

const markets = [
  "ATL", "CLT", "HTX", "Dallas", "NYC", "DC", "Miami", 
  "Orlando", "Tallahassee", "Raleigh", "Chicago", "Ohio", "Virginia", "LA"
]

export function MarketsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="markets" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Featured Markets</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance max-w-2xl mx-auto">
            We&apos;re growing fast — <span className="text-gold">find your city</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {markets.map((market, index) => (
            <motion.span
              key={market}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-5 py-2.5 rounded-full glass-card text-sm font-bold cursor-pointer transition-all hover:border-gold/50 group text-gold"
            >
              {market}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-base inline-flex items-center gap-2">
            <Star className="w-4 h-4 text-gold fill-gold" />
            Don&apos;t see your city? Apply anyway — we&apos;re always expanding.
            <Star className="w-4 h-4 text-gold fill-gold" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}
