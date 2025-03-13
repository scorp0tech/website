"use client"

import * as React from "react"
import Link from "next/link"
import { Monitor, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export function MainNav() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : ""
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-2">
          <Monitor className="h-6 w-6" />
          <span className="font-bold text-xl">ScorpTech</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {route.label}
            </Link>
          ))}
          <Button>Get Started</Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {route.label}
                </Link>
              ))}
              <Button className="w-full">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}