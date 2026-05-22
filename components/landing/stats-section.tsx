"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Building2, DollarSign, Ticket } from "lucide-react"

const stats = [
  { value: "1,100+", label: "Ambassadors", icon: Users, colorClass: "text-neon-gold", bgClass: "bg-neon-gold/20" },
  { value: "25+", label: "Cities", icon: Building2, colorClass: "text-neon-amber", bgClass: "bg-neon-amber/20" },
  { value: "14+", label: "Universities", icon: TrendingUp, colorClass: "text-neon-gold-light", bgClass: "bg-neon-gold-light/20" },
  { value: "$490K+", label: "Generated", icon: DollarSign, colorClass: "text-neon-gold", bgClass: "bg-neon-gold/20" },
  { value: "950+", label: "Events", icon: Ticket, colorClass: "text-neon-bronze", bgClass: "bg-neon-bronze/20" },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-amber/10 rounded-full blur-[150px]" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-neon-gold">The Movement</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance">
            Built by <span className="text-neon-gold">ambassadors</span>.{" "}
            <br className="hidden md:block" />
            Powered by <span className="text-neon-amber">community</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card rounded-3xl p-6 text-center relative overflow-hidden group cursor-pointer ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring" }}
                className={`w-12 h-12 mx-auto mb-4 rounded-2xl ${stat.bgClass} flex items-center justify-center`}
              >
                <stat.icon className={`w-6 h-6 ${stat.colorClass}`} />
              </motion.div>
              
              <motion.span 
                className={`text-4xl md:text-5xl font-black ${stat.colorClass} block`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.value}
              </motion.span>
              <p className="text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
