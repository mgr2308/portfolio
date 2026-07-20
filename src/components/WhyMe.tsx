"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Check } from "lucide-react"

const reasons = [
  "Работаю на основе аналитики, а не интуиции",
  "Не гонюсь за трендами ради трендов",
  "Умею выстраивать систему и процессы",
  "Понимаю бизнес-задачи и KPI",
  "Работаю самостоятельно и беру ответственность",
  "Всегда соблюдаю дедлайны",
]

export function WhyMe() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Преимущества
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Почему со мной
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Принципы, которые лежат в основе моей работы
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 p-5 bg-white rounded-sm border border-sand/40 transition-all duration-300 hover:shadow-md hover:shadow-accent/5"
            >
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <p className="text-graphite text-sm md:text-base leading-relaxed">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
