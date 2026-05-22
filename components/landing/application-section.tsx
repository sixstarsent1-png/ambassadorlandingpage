"use client"

import { useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2, Sparkles, Rocket, PartyPopper } from "lucide-react"

type RoleType = "student" | "creator" | "influencer" | "promoter" | "connector"

const roles: { value: RoleType; label: string; emoji: string }[] = [
  { value: "student", label: "Student", emoji: "🎓" },
  { value: "creator", label: "Creator", emoji: "🎬" },
  { value: "influencer", label: "Influencer", emoji: "⭐" },
  { value: "promoter", label: "Promoter", emoji: "🎤" },
  { value: "connector", label: "Connector", emoji: "🤝" },
]

export function ApplicationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRoles, setSelectedRoles] = useState<RoleType[]>([])

  const toggleRole = (role: RoleType) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="apply" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 via-background to-background" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Final CTA Header */}
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
            <Rocket className="w-4 h-4 text-neon-pink" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-pink">Apply Now</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-balance">
            Your city needs a <span className="gradient-text">star</span>.
            <br />
            <span className="text-neon-cyan">That could be you.</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Apply now and start your journey with Six Stars Entertainment.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
              >
                {/* Celebration confetti effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        y: -20, 
                        x: Math.random() * 400 - 200,
                        rotate: 0,
                        opacity: 1 
                      }}
                      animate={{ 
                        y: 400, 
                        rotate: Math.random() * 360,
                        opacity: 0 
                      }}
                      transition={{ 
                        duration: 2 + Math.random(),
                        delay: Math.random() * 0.5,
                        ease: "easeOut"
                      }}
                      className={`absolute top-0 left-1/2 w-3 h-3 rounded-full ${
                        i % 4 === 0 ? "bg-neon-purple" :
                        i % 4 === 1 ? "bg-neon-pink" :
                        i % 4 === 2 ? "bg-neon-cyan" : "bg-neon-gold"
                      }`}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-6 glow-purple"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-black mb-3 gradient-text">You&apos;re In!</h3>
                <p className="text-muted-foreground text-lg">
                  We&apos;ll review your application and get back to you within 48-72 hours.
                </p>
                <div className="flex justify-center gap-2 mt-6">
                  <PartyPopper className="w-6 h-6 text-neon-gold" />
                  <PartyPopper className="w-6 h-6 text-neon-pink" />
                  <PartyPopper className="w-6 h-6 text-neon-cyan" />
                </div>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden"
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border border-neon-purple/30" />
                
                <div className="relative z-10 space-y-6">
                  {/* Name & Instagram */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-bold text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Your name"
                        required
                        className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-neon-purple focus:ring-neon-purple/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="instagram" className="block text-sm font-bold text-foreground mb-2">
                        Instagram Handle
                      </label>
                      <Input
                        id="instagram"
                        name="instagram"
                        placeholder="@yourusername"
                        required
                        className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-neon-pink focus:ring-neon-pink/20"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-neon-cyan focus:ring-neon-cyan/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-neon-gold focus:ring-neon-gold/20"
                      />
                    </div>
                  </div>

                  {/* City/School */}
                  <div>
                    <label htmlFor="citySchool" className="block text-sm font-bold text-foreground mb-2">
                      City / School
                    </label>
                    <Input
                      id="citySchool"
                      name="citySchool"
                      placeholder="e.g., Atlanta / Georgia State"
                      required
                      className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-neon-purple focus:ring-neon-purple/20"
                    />
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-3">
                      What best describes you? <span className="text-muted-foreground font-normal">(Select all)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((role) => (
                        <motion.button
                          key={role.value}
                          type="button"
                          onClick={() => toggleRole(role.value)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                            selectedRoles.includes(role.value)
                              ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white glow-purple"
                              : "glass-card hover:border-neon-purple/50"
                          }`}
                        >
                          <span>{role.emoji}</span>
                          {role.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Why Join */}
                  <div>
                    <label htmlFor="whyJoin" className="block text-sm font-bold text-foreground mb-2">
                      Why do you want to join?
                    </label>
                    <textarea
                      id="whyJoin"
                      name="whyJoin"
                      rows={4}
                      placeholder="Tell us about yourself and what excites you about Six Stars..."
                      required
                      className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/20 focus-visible:border-neon-purple transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-black bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 text-white glow-purple rounded-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By applying, you agree to receive communications from Six Stars Entertainment.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
