"use client"

import Link from "next/link"
import { Instagram, Send } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-sand/40">
      <div className="section-container py-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Link
                href="/"
                className="text-graphite font-display text-xl font-semibold hover:text-accent transition-colors duration-300"
              >
                Мария Гусева
              </Link>
              <p className="text-muted-gray text-xs mt-1">
                SMM & Content Manager
              </p>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="https://t.me/mariaguseva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-gray hover:text-accent transition-colors duration-300"
                aria-label="Telegram"
              >
                <Send size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com/mariaguseva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-gray hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            </div>

            <p className="text-muted-gray text-xs text-center md:text-right">
              &copy; {currentYear}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
