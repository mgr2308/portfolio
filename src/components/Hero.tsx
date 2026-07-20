"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-sand/20 blur-3xl" />
        <div className="absolute bottom-40 right-16 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-olive/10 blur-3xl" />
      </div>

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-accent/40" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                Портфолио 2026
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-semibold text-graphite leading-[0.95] mb-6">
              Мария
              <br />
              <span className="italic font-light">Гусева</span>
            </h1>
            
            <p className="text-accent font-sans text-sm tracking-[0.25em] uppercase mb-8 font-medium">
              SMM & Content Manager
            </p>
            
            <p className="text-muted-gray text-base md:text-lg leading-relaxed max-w-lg mb-10 text-balance">
              Создаю контент, который не просто красиво выглядит, а помогает
              брендам расти, собирать лояльное сообщество и получать клиентов.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-chocolate hover:bg-accent">
                <Link href="#projects">Посмотреть кейсы</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-chocolate text-chocolate hover:bg-chocolate hover:text-white">
                <Link href="#contacts">Связаться</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="polaroid">
                <div className="aspect-[3/4] bg-sand/30 flex items-center justify-center text-accent/40 font-serif text-lg overflow-hidden">
                  <div className="text-center">
                    <Paperclip className="mx-auto mb-2 opacity-30" size={24} />
                    <span className="text-sm">Ваше фото</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-accent/5 backdrop-blur-sm border border-white/40" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-olive/10 backdrop-blur-sm border border-white/40" />
              
              <div className="absolute top-4 -left-2 text-xs text-muted-gray/60 font-medium tracking-wider uppercase rotate-[-90deg] origin-left">
                Est. 2022
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-gray tracking-widest uppercase">
          Листай ниже
        </span>
        <ArrowDown
          size={16}
          className="text-muted-gray animate-bounce"
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  )
}
