"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"

const steps = [
  { number: "01", title: "Бриф", desc: "Заполнение брифа, знакомство с брендом, определение целей и KPI" },
  { number: "02", title: "Анализ", desc: "Анализ рынка, конкурентов, ЦА и текущего позиционирования" },
  { number: "03", title: "Стратегия", desc: "Разработка контент-стратегии, визуальной концепции и контент-плана" },
  { number: "04", title: "Съемка", desc: "Организация и проведение съемок: фото, видео, Reels" },
  { number: "05", title: "Монтаж", desc: "Обработка материалов, монтаж Reels, цветокоррекция" },
  { number: "06", title: "Публикация", desc: "Публикация контента, работа с аудиторией, сторис" },
  { number: "07", title: "Аналитика", desc: "Отчетность, анализ эффективности, корректировка стратегии" },
]

export function WorkProcess() {
  return (
    <section className="section-padding bg-white relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Процесс
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Мой процесс работы
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Прозрачная система, которая приводит к результату
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-sand/60" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.5 }}
                className="flex gap-6 md:gap-8 py-6 md:py-8 group"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 border border-sand/40">
                    <span className="text-xs md:text-sm font-medium text-accent">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="pt-1 md:pt-2">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-graphite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-gray text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
