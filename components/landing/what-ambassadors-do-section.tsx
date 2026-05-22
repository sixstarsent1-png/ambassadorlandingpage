"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { 
  Megaphone, 
  Link2, 
  Camera, 
  Users, 
  PartyPopper, 
  Gift,
  Flame,
  Play
} from "lucide-react"

const activities = [
  {
    icon: Megaphone,
    title: "Promote Events",
    description: "Share events with your network",
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/20",
    borderClass: "hover:border-neon-purple/50",
  },
  {
    icon: Link2,
    title: "Share Links",
    description: "Earn commissions on every sale",
    colorClass: "text-neon-pink",
    bgClass: "bg-neon-pink/20",
    borderClass: "hover:border-neon-pink/50",
  },
  {
    icon: Camera,
    title: "Create Content",
    description: "Build your portfolio",
    colorClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/20",
    borderClass: "hover:border-neon-cyan/50",
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Grow your local scene",
    colorClass: "text-neon-gold",
    bgClass: "bg-neon-gold/20",
    borderClass: "hover:border-neon-gold/50",
  },
  {
    icon: PartyPopper,
    title: "Run Activations",
    description: "Help run campus events",
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/20",
    borderClass: "hover:border-neon-purple/50",
  },
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Get paid & get perks",
    colorClass: "text-neon-pink",
    bgClass: "bg-neon-pink/20",
    borderClass: "hover:border-neon-pink/50",
  },
]

const stackedImages = [
  { src: "/images/party-1.jpg", rotate: -6, zIndex: 1 },
  { src: "/images/ambassador-action.jpg", rotate: 3, zIndex: 2 },
  { src: "/images/party-4.jpg", rotate: -3, zIndex: 3 },
]

export function WhatAmbassadorsDoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-neon-purple/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-neon-cyan/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
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
            <Flame className="w-4 h-4 text-neon-purple" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-purple">What Ambassadors Do</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance max-w-3xl mx-auto">
            Be the <span className="gradient-text">face of culture</span> in your city
          </h2>
        </motion.div>

        {/* Main content - Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Stacked Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] hidden lg:block"
          >
            {stackedImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.8, rotate: img.rotate * 2 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: img.rotate } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 10,
                  transition: { duration: 0.3 } 
                }}
                className="absolute rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  width: index === 1 ? "85%" : "75%",
                  height: index === 1 ? "85%" : "70%",
                  top: index === 0 ? "5%" : index === 1 ? "10%" : "15%",
                  left: index === 0 ? "5%" : index === 1 ? "10%" : "20%",
                  zIndex: img.zIndex,
                }}
              >
                <Image
                  src={img.src}
                  alt="Ambassador lifestyle"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Neon border glow */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-neon-purple/30" />
              </motion.div>
            ))}
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              className="absolute -bottom-2 -right-2 z-20"
            >
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
                <Play className="w-4 h-4 text-neon-pink fill-neon-pink" />
                <span className="text-sm font-bold text-neon-pink">Creating content</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
              className="absolute top-4 -right-2 z-20"
            >
              <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <span className="text-sm font-bold text-neon-gold">VIP access</span>
              </div>
            </motion.div>

            {/* Floating emojis */}
            <motion.span
              animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-10 text-4xl z-20"
            >
              ⚡
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-20 left-0 text-4xl z-20"
            >
              🎉
            </motion.span>
          </motion.div>

          {/* Right - Activity Grid */}
          <div className="grid grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className={`group glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300 ${activity.borderClass}`}
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className={`w-12 h-12 rounded-xl ${activity.bgClass} flex items-center justify-center mb-3`}
                >
                  <activity.icon className={`w-6 h-6 ${activity.colorClass}`} />
                </motion.div>
                <h3 className="font-bold text-base mb-1 text-foreground">{activity.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
