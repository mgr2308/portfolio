"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
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
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">FAQ</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Частые вопросы
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          Ответы на вопросы, которые мне задают чаще всего
        </p>

        <div className="max-w-2xl mx-auto space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="bordered-card overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-charcoal-03 transition-colors duration-150"
              >
                <span className="text-charcoal font-medium text-sm md:text-base pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`text-charcoal flex-shrink-0 transition-transform duration-250 ease-standard ${
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
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-gray text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
