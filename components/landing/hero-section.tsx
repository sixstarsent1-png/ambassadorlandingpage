"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Ticket, Trophy, MapPin, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Festival crowd with dramatic lighting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>
      
      {/* Animated gradient orbs - Gold theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-gold/30 blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-amber/30 blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-gold-light/20 blur-[150px]"
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_oklch(0.4_0.08_75_/_0.1)_1px,_transparent_1px),linear-gradient(to_bottom,_oklch(0.4_0.08_75_/_0.1)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-neon-gold" />
            </motion.div>
            <span className="text-sm font-medium bg-gradient-to-r from-neon-gold via-neon-gold-light to-neon-amber bg-clip-text text-transparent">
              Now Recruiting in 25+ Cities
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-gold"></span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-balance leading-[0.95]"
          >
            Become a{" "}
            <span className="gradient-text">Six Stars</span>{" "}
            Ambassador
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty font-medium"
          >
            Join the movement behind the fastest-growing{" "}
            <span className="text-neon-gold">culture</span>,{" "}
            <span className="text-neon-amber">nightlife</span>,{" "}
            <span className="text-neon-gold-light">festival</span>, and{" "}
            <span className="text-neon-gold">travel</span> experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild variant="gold" size="lg" className="h-14 px-10 text-lg">
              <a href="https://sixstars-creator.vercel.app/apply" target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-5 h-5 mr-2" />
                Apply Now
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 text-lg font-semibold border-2 border-neon-gold/50 hover:border-neon-gold hover:bg-neon-gold/10 transition-all"
            >
              <a href="#about">See How It Works</a>
            </Button>
          </motion.div>

          {/* Floating preview cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Card 1 - Gold */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -8, rotate: 2, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-neon-gold/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Ticket className="w-5 h-5 text-neon-gold" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Ambassador Sales</p>
                  <p className="text-xl font-black text-neon-gold">$490K+</p>
                </div>
              </motion.div>

              {/* Card 2 - Amber */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -8, rotate: 2, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-neon-amber/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5 text-neon-amber" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Weekly Missions</p>
                  <p className="text-xl font-black text-neon-amber">Rewards</p>
                </div>
              </motion.div>

              {/* Card 3 - Gold Light */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -8, rotate: 2, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-neon-gold-light/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-neon-gold-light" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Active Cities</p>
                  <p className="text-xl font-black text-neon-gold-light">25+</p>
                </div>
              </motion.div>

              {/* Card 4 - Bronze */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ y: -8, rotate: 2, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-5 cursor-pointer group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-neon-bronze/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-neon-bronze" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Exclusive Access</p>
                  <p className="text-xl font-black text-neon-bronze">VIP</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-neon-gold"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
