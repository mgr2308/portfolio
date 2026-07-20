"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import {
  Lightbulb,
  Film,
  Camera,
  Scissors,
  Calendar,
  PenLine,
  Palette,
  Share2,
  Users,
  BarChart3,
} from "lucide-react"

const skills = [
  { title: "Контент-стратегия", icon: Lightbulb },
  { title: "Создание Reels", icon: Film },
  { title: "Мобильная съемка", icon: Camera },
  { title: "Монтаж", icon: Scissors },
  { title: "Контент-план", icon: Calendar },
  { title: "Копирайтинг", icon: PenLine },
  { title: "Визуальная упаковка", icon: Palette },
  { title: "SMM", icon: Share2 },
  { title: "Работа с блогерами", icon: Users },
  { title: "Аналитика", icon: BarChart3 },
]

export function Skills() {
  return (
    <section className="section-padding bg-white relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Навыки
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Что я умею
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Полный цикл создания контента — от стратегии до аналитики
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-cream rounded-sm p-5 md:p-6 text-center cursor-default transition-all duration-300 hover:shadow-md hover:shadow-accent/5 border border-sand/40"
            >
              <skill.icon
                size={28}
                strokeWidth={1.2}
                className="text-accent mx-auto mb-3"
              />
              <h3 className="text-sm font-medium text-graphite leading-snug">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
