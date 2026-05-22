"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Six Stars gave me a way to make money, build connections, and be part of the biggest events in my city.",
    author: "Jordan M.",
    role: "Campus Ambassador, ATL",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    quote: "I started as an ambassador and now help lead events in my market. The growth opportunity is real.",
    author: "Taylor R.",
    role: "City Lead, Charlotte",
    image: "/images/testimonial-2.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-neon-pink/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[150px]" />
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
            <Quote className="w-4 h-4 text-neon-pink" />
            <span className="text-xs font-bold uppercase tracking-widest text-neon-pink">From Our Ambassadors</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-balance max-w-2xl mx-auto">
            Real stories, <span className="gradient-text">real impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30, rotate: index === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative glass-card rounded-3xl p-6 md:p-8 cursor-pointer group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? "from-neon-purple/10" : "from-neon-pink/10"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-neon-gold text-neon-gold`}
                    />
                  ))}
                </div>

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-neon-purple/30 group-hover:ring-neon-purple/50 transition-all">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                    <p className={`text-sm font-medium ${index === 0 ? "text-neon-purple" : "text-neon-pink"}`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${index === 0 ? "bg-neon-purple/10" : "bg-neon-pink/10"} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
