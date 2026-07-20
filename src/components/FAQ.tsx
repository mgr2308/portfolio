"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import faqData from "@/data/faq.json"
import type { FAQItem } from "@/lib/directus"

interface Props {
  faq?: FAQItem[]
}

export function FAQ({ faq: faqProp }: Props) {
  const faq = faqProp ?? faqData
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              FAQ
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Частые вопросы
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Ответы на вопросы, которые мне задают чаще всего
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-3">
          {faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              className="editorial-card overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-cream/50 transition-colors duration-300"
              >
                <span className="text-graphite font-medium text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-gray text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
