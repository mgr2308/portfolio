"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Paperclip } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import casesData from "@/data/cases.json"
import type { CaseItem } from "@/lib/directus"

interface Props {
  cases?: CaseItem[]
}

export function Projects({ cases: casesProp }: Props) {
  const cases = casesProp ?? casesData

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Кейсы
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Мои проекты
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Каждый проект — это история трансформации бренда в социальных сетях
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((item, i) => (
            <ScrollReveal key={item.slug} delay={0.1 * i}>
              <Link href={`/cases/${item.slug}`} className="block group">
                <div className="editorial-card h-full cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-video bg-sand/30 flex items-center justify-center overflow-hidden relative">
                    <div className="text-accent/30 font-display text-3xl md:text-4xl font-semibold italic group-hover:scale-105 transition-transform duration-700">
                      {item.title}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Paperclip className="opacity-40" size={16} />
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="tag">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-gray">{item.year}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-graphite group-hover:text-accent transition-colors duration-300 mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-gray text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    <span className="inline-flex items-center gap-1.5 text-sm text-accent font-medium group-hover:gap-3 transition-all duration-300">
                      Смотреть кейс
                      <ArrowRight size={14} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="divider mx-auto" />
          <p className="text-muted-gray text-sm italic max-w-md mx-auto leading-relaxed">
            Это лишь часть проектов. Если вы хотите увидеть больше —
            напишите мне, я с радостью покажу.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
