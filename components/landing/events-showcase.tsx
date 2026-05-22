"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Palmtree, 
  Music, 
  GraduationCap, 
  Sun, 
  Mic2,
  PartyPopper,
  Calendar
} from "lucide-react"

const events = [
  {
    name: "Dirty South Rodeo Festival",
    description: "Urban western festival blending country trap culture, live performances, and Southern nightlife.",
    icon: Music,
    markets: ["Atlanta", "Dallas", "Florida", "Charlotte"],
    color: "gold",
  },
  {
    name: "HTX Spring Break",
    description: "Multi-week Houston takeover with pool parties, club events, mansion parties, and celebrity appearances.",
    icon: Palmtree,
    markets: ["Houston"],
    color: "gold-light",
  },
  {
    name: "NC Greek Picnic",
    description: "The Greek Super Bowl — massive HBCU/Greek life weekend with concerts, day parties, and cultural experiences.",
    icon: GraduationCap,
    markets: ["North Carolina"],
    color: "gold",
  },
  {
    name: "Soul District Block Party",
    description: "Outdoor community-driven festival with DJs, vendors, food trucks, and live performances.",
    icon: PartyPopper,
    markets: ["Multiple Cities"],
    color: "gold-light",
  },
  {
    name: "Sunset & Soul Tour",
    description: "National Sunday day-party experience featuring R&B, Afrobeats, neo-soul, and golden hour vibes.",
    icon: Sun,
    markets: ["37+ Cities"],
    color: "gold",
  },
  {
    name: "Good Ole Days Tour",
    description: "Nostalgia-based touring experience celebrating 2000s and 2010s R&B/Hip-Hop classics.",
    icon: Mic2,
    markets: ["Nationwide"],
    color: "gold-light",
  },
]

export function EventsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="events" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px]" />
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
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Our Events</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance max-w-3xl mx-auto">
            Flagship <span className="text-gold">Events & Experiences</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Six Stars operates festivals, weekend takeovers, day parties, HBCU activations, and travel experiences across the country.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:border-gold/50 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors"
                >
                  <event.icon className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Content */}
                <h3 className="font-black text-xl mb-2 text-foreground group-hover:text-gold transition-colors">
                  {event.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Markets */}
                <div className="flex flex-wrap gap-2">
                  {event.markets.map((market) => (
                    <span 
                      key={market}
                      className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-lg">
            Built around <span className="text-gold font-bold">culture</span>, <span className="text-gold font-bold">nightlife</span>, <span className="text-gold font-bold">travel</span>, and <span className="text-gold font-bold">HBCUs</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
