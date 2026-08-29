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
    <section className="section-padding bg-cream relative">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">Процесс</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Мой процесс работы
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          Прозрачная система, которая приводит к результату
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-border-light" />

          <div className="space-y-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 md:gap-8 py-6 md:py-8"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-pill bg-charcoal-04 flex items-center justify-center border border-border-light">
                    <span className="text-xs md:text-sm font-medium text-charcoal">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="pt-1 md:pt-2">
                  <h3 className="text-lg md:text-xl font-sans font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-gray text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
