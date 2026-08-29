import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">Кейсы</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Мои проекты
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          Каждый проект — это история трансформации бренда в социальных сетях
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cases.map((item) => (
            <Link key={item.slug} href={`/cases/${item.slug}`} className="block group">
              <div className="bordered-card h-full">
                <div className="aspect-video bg-charcoal-04 flex items-center justify-center overflow-hidden relative">
                  <div className="text-charcoal-10 font-sans text-3xl md:text-4xl font-semibold">
                    {item.title}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="tag">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-gray">{item.year}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-charcoal mb-4">
                    {item.title}
                  </h3>

                  <p className="text-muted-gray text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm text-charcoal font-medium underline underline-offset-[3px]">
                    Смотреть кейс
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="hairline mx-auto" />
          <p className="text-muted-gray text-sm font-display-alt max-w-md mx-auto leading-relaxed">
            Это лишь часть проектов. Если вы хотите увидеть больше —
            напишите мне, я с радостью покажу.
          </p>
        </div>
      </div>
    </section>
  )
}
