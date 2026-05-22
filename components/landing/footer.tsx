"use client"

import { motion } from "framer-motion"
import { Star, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const APPLY_URL = "https://sixstars-creator.vercel.app/apply"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
          >
            Ready to become a <span className="text-gold">Six Star</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
          >
            Join 1,100+ ambassadors making money, building connections, and living the culture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-black font-bold px-10 py-6 text-lg glow-gold"
            >
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-12 border-t border-border/50 pb-32 md:pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent" />

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
                  <Star 
                    key={i} 
                    className="w-3 h-3 text-gold fill-gold"
                  />
                ))}
              </div>
              <span className="font-black text-sm tracking-tight text-gold">SIX STARS ENTERTAINMENT</span>
            </motion.a>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm font-medium">
              {[
                { name: "About", href: "#about" },
                { name: "Benefits", href: "#benefits" },
                { name: "Events", href: "#events" },
                { name: "Tiers", href: "#tiers" },
                { name: "Apply", href: APPLY_URL, external: true },
              ].map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-gold transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-gold/50 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-gold/50 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gold" />
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
      </div>
    </footer>
  )
}
