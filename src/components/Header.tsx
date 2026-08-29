"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#projects", label: "Кейсы" },
  { href: "#services", label: "Услуги" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cream border-b border-border-light py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="section-container flex items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-charcoal font-sans text-xl md:text-2xl font-semibold tracking-[-0.8px]"
        >
          Мария Гусева
          <span className="text-sm font-normal tracking-normal text-muted-gray hidden md:inline">
            SMM & Content Manager
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-gray hover:text-charcoal transition-colors duration-150 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-250 ease-standard group-hover:w-full" />
            </Link>
          ))}
          <Button size="sm" asChild>
            <Link href="#contacts">Связаться</Link>
          </Button>
        </nav>

        <button
          className="lg:hidden p-2 text-charcoal hover:opacity-80 transition-opacity duration-150"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Меню"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-cream border-b border-border-light"
          >
            <nav className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-lg text-charcoal hover:opacity-80 transition-opacity duration-150 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                size="lg"
                className="mt-4 w-full"
                onClick={() => setIsMobileOpen(false)}
                asChild
              >
                <Link href="#contacts">Связаться</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
