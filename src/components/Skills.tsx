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
    <section className="section-padding bg-cream relative">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">Навыки</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Что я умею
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          Полный цикл создания контента — от стратегии до аналитики
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bordered-card p-5 md:p-6 text-center"
            >
              <skill.icon
                size={28}
                strokeWidth={1.2}
                className="text-charcoal mx-auto mb-3"
              />
              <h3 className="text-sm font-medium text-charcoal leading-snug">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
