"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  DollarSign, 
  Crown, 
  TrendingUp, 
  Network, 
  CalendarDays, 
  ArrowUpRight,
  Zap 
} from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: DollarSign,
    title: "Make Money from Ticket Sales",
    description: "Earn commission on every ticket sold through your unique promo link.",
  },
  {
    icon: Crown,
    title: "Get VIP Access to Events",
    description: "Skip the line, get into sold-out shows, and experience events like a star.",
  },
  {
    icon: TrendingUp,
    title: "Build Your Personal Brand",
    description: "Grow your social presence and portfolio with real event marketing experience.",
  },
  {
    icon: Network,
    title: "Network with Industry Leaders",
    description: "Connect with promoters, creators, DJs, hosts, and major brands.",
  },
  {
    icon: CalendarDays,
    title: "Early Access to Festivals",
    description: "Be first to know about exclusive festivals and travel experiences.",
  },
  {
    icon: ArrowUpRight,
    title: "Move Up into Leadership",
    description: "Grow from ambassador to captain, city lead, or paid team member.",
  },
]

export function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ambassador-event.jpg"
          alt="VIP event atmosphere"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[120px]" />
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
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Why Join</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance max-w-3xl mx-auto">
            More than just perks — <br className="hidden md:block" />
            it&apos;s a <span className="text-gold">launchpad</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative glass-card rounded-3xl p-6 cursor-pointer overflow-hidden hover:border-gold/50 transition-all duration-300"
            >
              <div className="relative z-10 flex items-start gap-4">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <benefit.icon className="w-6 h-6 text-gold" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground group-hover:text-gold transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
