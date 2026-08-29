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
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">Преимущества</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Почему со мной
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          Принципы, которые лежат в основе моей работы
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="bordered-card flex items-start gap-4 p-5"
            >
              <div className="w-8 h-8 rounded-pill bg-charcoal shadow-inset flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-off-white" strokeWidth={2.5} />
              </div>
              <p className="text-charcoal text-sm md:text-base leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
