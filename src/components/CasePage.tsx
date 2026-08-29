import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CaseResult {
  [key: string]: string | undefined
}

interface Testimonial {
  text: string
  name: string
  role: string
}

interface CaseData {
  slug: string
  title: string
  category: string
  year: string
  description: string
  brandDescription: string
  task: string
  problems: string[]
  whatWasDone: string[]
  myRole: string[]
  results: CaseResult
  testimonial?: Testimonial
  images: string[]
  videos: string[]
  statsScreenshots: string[]
}

interface NextCase {
  slug: string
  title: string
}

interface CasePageProps {
  caseData: CaseData
  nextCase: NextCase
}

export function CasePage({ caseData, nextCase }: CasePageProps) {
  return (
    <main className="min-h-screen pt-24 pb-32 relative">
      <div className="section-container">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-gray hover:text-charcoal transition-colors duration-150 mb-12"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
          <span className="text-sm">Все проекты</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">
            {caseData.category} · {caseData.year}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-8 leading-[1.1]">
          {caseData.title}
        </h1>

        <div className="bordered-card aspect-[16/7] bg-charcoal-04 mb-16 flex items-center justify-center relative">
          <div className="text-charcoal-10 font-sans text-4xl md:text-5xl font-semibold">
            {caseData.title}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-lg font-sans font-semibold text-charcoal mb-6">
                О бренде
              </h2>
              <p className="text-muted-gray leading-relaxed text-lg">
                {caseData.brandDescription}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-semibold text-charcoal mb-6">
                Задача
              </h2>
              <p className="text-muted-gray leading-relaxed text-lg">
                {caseData.task}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-sans font-semibold text-charcoal mb-6">
                Проблемы
              </h2>
              <ul className="space-y-3">
                {caseData.problems.map((problem, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-gray"
                  >
                    <span className="w-1.5 h-1.5 rounded-pill bg-charcoal mt-2.5 flex-shrink-0" />
                    <span className="leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-semibold text-charcoal mb-6">
                Что было сделано
              </h2>
              <ul className="space-y-4">
                {caseData.whatWasDone.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-gray"
                  >
                    <Check
                      size={18}
                      className="text-charcoal mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-sans font-semibold text-charcoal mb-6">
                Результаты
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(caseData.results)
                  .filter(([, value]) => value)
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="bordered-card p-6 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-sans font-semibold text-charcoal mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-muted-gray">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .trim()
                          .toLowerCase()}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-12">
              <div className="bordered-card p-8">
                <h3 className="text-sm font-sans font-semibold text-charcoal mb-6">
                  Моя зона ответственности
                </h3>
                <ul className="space-y-3">
                  {caseData.myRole.map((role, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-muted-gray"
                    >
                      <span className="w-1 h-1 rounded-pill bg-charcoal flex-shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {caseData.testimonial && (
                <div className="bordered-card p-8 relative">
                  <Quote className="absolute top-4 right-4 opacity-10" size={24} />
                  <p className="text-charcoal leading-relaxed text-sm font-display-alt mb-6">
                    &ldquo;{caseData.testimonial.text}&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-medium text-charcoal">
                      {caseData.testimonial.name}
                    </div>
                    <div className="text-xs text-muted-gray">
                      {caseData.testimonial.role}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border-light pt-16 text-center">
          <div className="hairline mx-auto" />
          <p className="text-muted-gray text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Хотите такой же подход для вашего бренда? Давайте обсудим проект.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contacts">Обсудить проект</Link>
          </Button>
        </div>

        <div className="mt-20 border-t border-border-light pt-8">
          <Link
            href={`/cases/${nextCase.slug}`}
            className="group flex items-center justify-between hover:opacity-80 transition-opacity duration-150"
          >
            <div>
              <span className="text-xs text-muted-gray">
                Следующий кейс
              </span>
              <h3 className="text-2xl md:text-3xl font-sans font-semibold mt-1">
                {nextCase.title}
              </h3>
            </div>
            <ArrowRight
              size={24}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-250 ease-standard"
            />
          </Link>
        </div>
      </div>
    </main>
  )
}
