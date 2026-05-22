"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Benefits", href: "#benefits" },
  { name: "Events", href: "#events" },
  { name: "Tiers", href: "#tiers" },
  { name: "Markets", href: "#markets" },
]

const APPLY_URL = "https://sixstars-creator.vercel.app/apply"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-card border-b border-border/50" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="flex items-center gap-0.5">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                  >
                    <Star 
                      className="w-3 h-3 text-gold fill-gold group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <span className="font-black text-lg tracking-tight text-gold">SIX STARS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="text-sm text-muted-foreground hover:text-gold transition-colors relative group font-medium"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-black font-bold px-6 glow-gold"
            >
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-card border-t border-border/50 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-muted-foreground hover:text-gold transition-colors py-2 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-black font-bold mt-2"
                >
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Apply Now</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Sticky CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 glass-card border-t border-border/50"
      >
        <Button 
          asChild 
          className="w-full h-12 text-base font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-[length:200%_100%] animate-pulse text-black"
        >
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">Apply to Become an Ambassador</a>
        </Button>
      </motion.div>
    </>
  )
}
