"use client"

import { motion } from "framer-motion"
import { Code2, Cpu, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web & App Development",
    description: "Custom web applications and mobile apps built with modern technologies.",
    icon: Code2,
  },
  {
    title: "AI Business Solutions",
    description: "Intelligent automation and AI-powered tools to streamline your operations.",
    icon: Cpu,
  },
  {
    title: "E-commerce & Integrations",
    description: "Seamless online shopping experiences with custom integrations.",
    icon: ShoppingBag,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground md:text-lg"
          >
            Comprehensive solutions to bring your business into the digital age
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}