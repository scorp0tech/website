"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Bot } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  const y = useTransform(scrollY, [0, 300], [0, 100])

  const gridVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.02,
      transition: {
        duration: 1.5
      }
    }
  }

  const gradientVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-grid-white"
        variants={gridVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      >
        <div className="h-[500px] w-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div 
        className="container relative px-4 md:px-6"
        style={{ opacity, scale, y }}
      >
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
              >
                Bringing Offline Businesses Online.
                <span className="text-primary"> Seamlessly.</span>
              </motion.h1>
              <motion.p
                custom={1}
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
              >
                Transform your business with cutting-edge web development, AI solutions, and seamless digital integration.
              </motion.p>
            </div>
            <motion.div
              className="mx-auto w-full max-w-sm space-y-2"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <motion.div whileHover="hover" variants={buttonVariants}>
                  <Button size="lg" className="group w-full">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div whileHover="hover" variants={buttonVariants}>
                  <Button size="lg" variant="outline" className="w-full">
                    See AI in Action
                    <Bot className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  )
}