"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Check } from "lucide-react"

const achievements = [
  { value: "4+", label: "лет опыта" },
  { value: "300+", label: "блогеров" },
  { value: "10+", label: "сфер работы" },
  { value: "100+", label: "съемок" },
]

const stats = [
  "создадите сильную визуальную идентичность бренда",
  "превратите социальные сети в инструмент привлечения клиентов",
  "повысите узнаваемость и доверие аудитории",
  "сэкономите время, передав SMM в надежные руки",
]

const skills = [
  "стратегия",
  "съемка",
  "монтаж",
  "Reels",
  "копирайтинг",
  "визуальная упаковка",
  "аналитика",
]

export function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sand/10 to-transparent pointer-events-none" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="polaroid max-w-sm mx-auto lg:max-w-none rotate-[-4deg]">
                <div className="aspect-[3/4] bg-sand/40 overflow-hidden">
                  <img
                    src="/images/about-photo-2.jpg"
                    alt="Мария Гусева"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-accent/5 blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-28 h-36 shadow-lg border-2 border-white -rotate-6 overflow-hidden -z-5 hidden md:block">
                <img
                  src="/images/about-photo-1.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent/40" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Обо мне
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-8 leading-[1.1]">
                Привет!
                <br />
                Меня зовут
                <br />
                Мария.
              </h2>
              
              <p className="text-muted-gray leading-relaxed mb-8 text-lg">
                Я SMM и контент-менеджер с опытом более 4 лет.
                Моя главная сила: уникальный подход к каждому проекту.
              </p>

              <p className="text-graphite text-sm tracking-[0.15em] uppercase font-medium mb-4">
                Создаю контент полного цикла:
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-sand/30 text-graphite rounded-sm"
                  >
                    <span className="text-accent">•</span>
                    {skill}
                  </motion.span>
                ))}
              </div>

              <p className="text-graphite text-sm tracking-[0.15em] uppercase font-medium mb-4">
                СО МНОЙ ВЫ:
              </p>

              <ul className="space-y-3 mb-0">
                {stats.map((stat, i) => (
                  <motion.li
                    key={stat}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5 }}
                    className="flex items-start gap-3 text-muted-gray text-sm md:text-base"
                  >
                    <Check
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="leading-relaxed">{stat}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-24">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="text-center p-6 md:p-8 bg-cream rounded-sm border border-sand/40"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-accent mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-muted-gray uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
