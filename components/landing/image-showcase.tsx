"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Play, Sparkles, Star, Zap, Heart } from "lucide-react"

const images = [
  { src: "/images/party-1.jpg", alt: "Festival friends", span: "col-span-2 row-span-2" },
  { src: "/images/party-2.jpg", alt: "Nightclub scene", span: "col-span-1 row-span-1" },
  { src: "/images/party-3.jpg", alt: "Beach party", span: "col-span-1 row-span-1" },
  { src: "/images/party-4.jpg", alt: "Rooftop party", span: "col-span-1 row-span-2" },
  { src: "/images/party-5.jpg", alt: "Pool party", span: "col-span-2 row-span-1" },
]

const floatingStickers = [
  { icon: "🔥", top: "10%", left: "5%", delay: 0 },
  { icon: "⚡", top: "20%", right: "8%", delay: 0.2 },
  { icon: "🎉", bottom: "30%", left: "3%", delay: 0.4 },
  { icon: "✨", bottom: "15%", right: "5%", delay: 0.6 },
  { icon: "🌴", top: "40%", left: "2%", delay: 0.8 },
]

export function ImageShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Floating stickers - Gen-Z aesthetic */}
      {floatingStickers.map((sticker, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: sticker.delay, type: "spring" }}
          className="absolute text-4xl md:text-5xl z-20 pointer-events-none hidden md:block"
          style={{ 
            top: sticker.top, 
            left: sticker.left, 
            right: sticker.right, 
            bottom: sticker.bottom 
          }}
        >
          <motion.span
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
            className="block drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            {sticker.icon}
          </motion.span>
        </motion.div>
      ))}

      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Play className="w-4 h-4 text-neon-pink" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-pink">The Vibe</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance">
            This is <span className="text-neon-pink">Six Stars</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From pool parties to festivals, rooftops to nightclubs — we create the moments that matter.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer ${image.span}`}
              style={{ minHeight: index === 0 ? "300px" : "150px" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover content */}
              <motion.div 
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm">{image.alt}</span>
                </div>
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {["#SixStarsLife", "#NightlifeVibes", "#FestivalSeason", "#PartyPeople", "#VIPAccess"].map((tag, index) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-4 py-2 rounded-full glass-card text-sm font-bold cursor-pointer hover:border-neon-pink/50 transition-colors"
            >
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                {tag}
              </span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
