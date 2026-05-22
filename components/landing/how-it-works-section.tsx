"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FileText, 
  CheckCircle2, 
  Package, 
  Share2, 
  Trophy,
  ArrowRight
} from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Apply",
    description: "Fill out the application form and tell us about yourself.",
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/20",
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "Get Approved",
    description: "We review your application and welcome you to the team.",
    colorClass: "text-neon-pink",
    bgClass: "bg-neon-pink/20",
  },
  {
    icon: Package,
    step: "03",
    title: "Get Resources",
    description: "Get your event links, missions, captions, and content toolkit.",
    colorClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/20",
  },
  {
    icon: Share2,
    step: "04",
    title: "Promote & Complete",
    description: "Share events, post content, sell tickets, and complete missions.",
    colorClass: "text-neon-gold",
    bgClass: "bg-neon-gold/20",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Earn & Grow",
    description: "Get rewards, commissions, and unlock bigger opportunities.",
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/20",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-purple/5 to-background" />
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
            <ArrowRight className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan">How It Works</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance max-w-2xl mx-auto">
            From application to <span className="gradient-text">activation</span>
          </h2>
        </motion.div>

        {/* Steps - horizontal on desktop, vertical on mobile */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-purple via-neon-pink via-neon-cyan via-neon-gold to-neon-purple" />
            
            {steps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center w-1/5"
              >
                {/* Step circle */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 rounded-3xl ${item.bgClass} flex items-center justify-center mb-4 relative z-10 border-4 border-background`}
                >
                  <item.icon className={`w-8 h-8 ${item.colorClass}`} />
                </motion.div>
                
                {/* Step number */}
                <span className={`text-xs font-mono font-bold ${item.colorClass} mb-2`}>
                  Step {item.step}
                </span>
                
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: vertical cards */}
          <div className="lg:hidden space-y-4">
            {steps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bgClass} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.colorClass}`} />
                </div>
                <div>
                  <span className={`text-xs font-mono font-bold ${item.colorClass}`}>
                    Step {item.step}
                  </span>
                  <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
