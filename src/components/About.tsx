"use client"

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
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="photo-frame max-w-sm mx-auto lg:max-w-none aspect-[3/4]">
            <img
              src="/images/about-photo-2.jpg"
              alt="Мария Гусева"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="eyebrow-rule" />
              <span className="eyebrow-label">Обо мне</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-8 leading-[1.1]">
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

            <p className="text-charcoal text-sm font-medium mb-4">
              Создаю контент полного цикла:
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-charcoal-04 text-charcoal rounded-sm"
                >
                  <span className="text-charcoal">•</span>
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-charcoal text-sm font-medium mb-4">
              СО МНОЙ ВЫ:
            </p>

            <ul className="space-y-3 mb-0">
              {stats.map((stat) => (
                <li
                  key={stat}
                  className="flex items-start gap-3 text-muted-gray text-sm md:text-base"
                >
                  <Check
                    size={16}
                    className="text-charcoal mt-0.5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="leading-relaxed">{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-24">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="bordered-card text-center p-6 md:p-8"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-sans font-semibold text-charcoal mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-muted-gray">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
