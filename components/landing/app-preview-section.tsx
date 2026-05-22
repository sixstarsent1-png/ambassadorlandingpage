"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Calendar, 
  Target, 
  Ticket, 
  Trophy, 
  Gift, 
  Link2 
} from "lucide-react"
import Image from "next/image"

const features = [
  { icon: Calendar, label: "Upcoming Events", value: "3 Active" },
  { icon: Target, label: "Missions", value: "5 New" },
  { icon: Ticket, label: "Ticket Sales", value: "$1,240" },
  { icon: Trophy, label: "Leaderboard", value: "#12" },
  { icon: Gift, label: "Rewards", value: "4 Available" },
  { icon: Link2, label: "Promo Links", value: "8 Active" },
]

export function AppPreviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/festival-crowd.jpg"
          alt="Festival atmosphere"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Ambassador Dashboard
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance max-w-2xl mx-auto">
            Everything you need, in one place
          </p>
        </motion.div>

        {/* Mock Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card/50 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-sm">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Welcome back,</p>
                <p className="font-bold text-xl text-foreground">Ambassador</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="bg-background/50 border border-border rounded-xl p-4 hover:border-primary/30 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">{feature.label}</p>
                  <p className="font-bold text-lg text-foreground">{feature.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  View Events
                </span>
                <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  Check Missions
                </span>
                <span className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  Share Link
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
