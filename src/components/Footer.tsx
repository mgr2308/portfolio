"use client"

import Link from "next/link"
import { Instagram, Send } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cream border-t border-border-light">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-charcoal font-sans text-xl font-semibold tracking-[-0.8px] hover:opacity-80 transition-opacity duration-150"
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
              className="text-muted-gray hover:text-charcoal transition-colors duration-150"
              aria-label="Telegram"
            >
              <Send size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/mariaguseva"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-gray hover:text-charcoal transition-colors duration-150"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-muted-gray text-xs text-center md:text-right">
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}
