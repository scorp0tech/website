"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Lightbulb, Rocket, Settings } from "lucide-react"

const steps = [
  {
    title: "Discovery",
    description: "We analyze your business needs and current online presence",
    icon: Lightbulb,
  },
  {
    title: "Development",
    description: "Our team builds your custom digital solution",
    icon: Settings,
  },
  {
    title: "Launch",
    description: "Your business goes live with its new digital presence",
    icon: Rocket,
  },
  {
    title: "Success",
    description: "Ongoing support and optimization for continued growth",
    icon: CheckCircle2,
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground md:text-lg"
          >
            Our proven process for bringing your business online
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-[2px] bg-border -z-10 transform translate-y-8">
                  <div className="w-3 h-3 absolute right-0 -top-[5px] rounded-full bg-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}