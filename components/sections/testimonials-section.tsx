"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  content: string
  image: string
  rating: number
  company: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "Fashion Boutique",
    content: "ScorpTech transformed our local boutique into a thriving online store. Their AI solutions have revolutionized how we interact with customers. Our online sales have increased by 300% since launching our e-commerce platform.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Owner",
    company: "Restaurant Chain",
    content: "The digital transformation of our restaurants exceeded all expectations. Our online presence has never been stronger. The online ordering system they implemented has streamlined our operations and significantly improved customer satisfaction.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Director",
    company: "Retail Group",
    content: "Working with ScorpTech was a game-changer. Their expertise in e-commerce integration is unmatched. The AI-powered inventory management system they developed has reduced our costs by 25% while improving accuracy.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "David Wilson",
    role: "Founder",
    company: "Tech Startup",
    content: "ScorpTech's AI solutions have given us a competitive edge in the market. Their team's technical expertise and innovative approach to problem-solving have made them an invaluable partner in our growth journey.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    name: "Lisa Zhang",
    role: "Marketing Director",
    company: "Global Retail",
    content: "The digital marketing platform ScorpTech built for us has transformed how we reach our customers. The AI-driven analytics have provided invaluable insights for our marketing strategy.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground md:text-lg"
          >
            See what our clients say about their digital transformation journey
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-background/50 backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarImage src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
                      <AvatarFallback>{testimonials[activeIndex].name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-medium mb-4">
                      {testimonials[activeIndex].content}
                    </p>
                    <div>
                      <p className="font-semibold">{testimonials[activeIndex].name}</p>
                      <p className="text-muted-foreground">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={previousTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                className={`w-2 h-2 p-0 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}