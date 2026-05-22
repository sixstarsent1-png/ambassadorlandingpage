"use client"

import { motion } from "framer-motion"
import { Sparkles, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50 pb-32 md:pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(6)].map((_, i) => (
                <Sparkles 
                  key={i} 
                  className={`w-3 h-3 ${
                    i % 3 === 0 ? "text-neon-purple" : 
                    i % 3 === 1 ? "text-neon-pink" : "text-neon-cyan"
                  }`}
                />
              ))}
            </div>
            <span className="font-black text-sm tracking-tight gradient-text">SIX STARS ENTERTAINMENT</span>
          </motion.a>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            {["About", "Benefits", "Tiers", "Apply"].map((link) => (
              <motion.a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-neon-pink/50 transition-colors"
            >
              <Instagram className="w-5 h-5 text-neon-pink" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-neon-cyan/50 transition-colors"
            >
              <Twitter className="w-5 h-5 text-neon-cyan" />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Six Stars Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
