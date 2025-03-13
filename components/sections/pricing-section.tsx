"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PlanFeature {
  name: string
  description: string
  included: boolean
}

interface Plan {
  name: string
  price: {
    monthly: string
    yearly: string
  }
  description: string
  features: PlanFeature[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: {
      monthly: "$999",
      yearly: "$899",
    },
    description: "Perfect for small businesses starting their digital journey",
    features: [
      {
        name: "Custom Website Development",
        description: "Professionally designed website tailored to your brand",
        included: true,
      },
      {
        name: "Basic SEO Setup",
        description: "Essential SEO optimization for better visibility",
        included: true,
      },
      {
        name: "Mobile Responsive Design",
        description: "Fully responsive layout for all devices",
        included: true,
      },
      {
        name: "5 Pages Included",
        description: "Home, About, Services, Contact, and one custom page",
        included: true,
      },
      {
        name: "3 Months Support",
        description: "Technical support and maintenance",
        included: true,
      },
    ],
  },
  {
    name: "Professional",
    price: {
      monthly: "$2,499",
      yearly: "$2,249",
    },
    description: "Ideal for growing businesses needing advanced features",
    highlighted: true,
    features: [
      {
        name: "Everything in Starter",
        description: "All features from the Starter plan",
        included: true,
      },
      {
        name: "E-commerce Integration",
        description: "Full online store setup with payment processing",
        included: true,
      },
      {
        name: "Advanced SEO Package",
        description: "Comprehensive SEO strategy and implementation",
        included: true,
      },
      {
        name: "Custom Features Development",
        description: "Tailored functionality for your business needs",
        included: true,
      },
      {
        name: "12 Months Support",
        description: "Priority technical support and maintenance",
        included: true,
      },
    ],
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "Full-scale digital transformation for large businesses",
    features: [
      {
        name: "Everything in Professional",
        description: "All features from the Professional plan",
        included: true,
      },
      {
        name: "AI-Powered Solutions",
        description: "Custom AI integration for automation",
        included: true,
      },
      {
        name: "Custom Integrations",
        description: "Enterprise software and API integrations",
        included: true,
      },
      {
        name: "Dedicated Support Team",
        description: "Your own team of technical experts",
        included: true,
      },
      {
        name: "24/7 Priority Support",
        description: "Round-the-clock technical assistance",
        included: true,
      },
    ],
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const handlePlanSelection = (planName: string) => {
    // In a real application, this would open a checkout process
    console.log(`Selected plan: ${planName}`)
  }

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground md:text-lg"
          >
            Choose the perfect plan for your business needs
          </motion.p>
          
          <div className="flex items-center justify-center mt-6 space-x-2">
            <Label htmlFor="billing-toggle">Monthly</Label>
            <Switch
              id="billing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="billing-toggle">
              Yearly
              <span className="ml-1.5 rounded-full bg-primary/10 px-2 py-0.5 text-xs">
                Save 10%
              </span>
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={`relative h-full ${
                plan.highlighted ? 'border-primary shadow-lg' : ''
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== "Custom" && (
                      <span className="text-muted-foreground ml-1">/project</span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.name} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground flex-1">{feature.name}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-muted-foreground/50" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{feature.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    onClick={() => handlePlanSelection(plan.name)}
                  >
                    {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}