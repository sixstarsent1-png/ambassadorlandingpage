"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, GraduationCap, Building2, Camera, MapPinned, Crown } from "lucide-react"

const tiers = [
  {
    icon: Users,
    name: "Street Team",
    badge: "Starter",
    bestFor: "Local nightlife enthusiasts",
    description: "Promote events, sell tickets, and be the pulse of your local scene.",
    colorClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/20",
    badgeBg: "bg-neon-cyan/20",
  },
  {
    icon: GraduationCap,
    name: "Campus Ambassador",
    badge: "Popular",
    bestFor: "College students & campus leaders",
    description: "Bring Six Stars events to your university and build your campus community.",
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/20",
    badgeBg: "bg-neon-purple/20",
  },
  {
    icon: Building2,
    name: "City Ambassador",
    badge: "Pro",
    bestFor: "Young professionals",
    description: "Represent Six Stars across your entire city and connect different communities.",
    colorClass: "text-neon-pink",
    bgClass: "bg-neon-pink/20",
    badgeBg: "bg-neon-pink/20",
  },
  {
    icon: Camera,
    name: "Content Creator",
    badge: "Creative",
    bestFor: "Influencers & creators",
    description: "Create UGC, capture moments, and build your portfolio with exclusive access.",
    colorClass: "text-neon-gold",
    bgClass: "bg-neon-gold/20",
    badgeBg: "bg-neon-gold/20",
  },
  {
    icon: MapPinned,
    name: "Regional Captain",
    badge: "Elite",
    bestFor: "Experienced leaders",
    description: "Lead multiple markets, mentor ambassadors, and help shape the movement.",
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/20",
    badgeBg: "bg-neon-purple/20",
    featured: true,
  },
]

export function TiersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tiers" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[200px]" />
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
            <Crown className="w-4 h-4 text-neon-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-gold">Ambassador Tiers</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance">
            Find your <span className="gradient-text">place</span> in the movement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative glass-card rounded-3xl p-6 cursor-pointer overflow-hidden ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              } ${tier.featured ? "ring-2 ring-neon-purple/50" : ""}`}
            >
              {/* Badge */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl ${tier.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <tier.icon className={`w-7 h-7 ${tier.colorClass}`} />
                </motion.div>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${tier.badgeBg} ${tier.colorClass}`}>
                  {tier.badge}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-black text-xl mb-1 text-foreground">{tier.name}</h3>
                <p className={`text-sm ${tier.colorClass} font-semibold mb-3`}>
                  {tier.bestFor}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{tier.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
