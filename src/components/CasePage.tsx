"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Paperclip, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"

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
        <ScrollReveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-gray hover:text-accent transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            <span className="text-sm">Все проекты</span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              {caseData.category} · {caseData.year}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-8 leading-[1.1]">
            {caseData.title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="aspect-[16/7] bg-sand/30 rounded-sm mb-16 flex items-center justify-center overflow-hidden relative editorial-card">
            <div className="text-accent/30 font-display text-4xl md:text-5xl font-semibold italic">
              {caseData.title}
            </div>
            <div className="absolute top-4 right-4">
              <Paperclip className="opacity-40" size={20} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-20">
            <ScrollReveal>
              <section>
                <h2 className="text-lg font-sans font-semibold text-graphite uppercase tracking-[0.15em] mb-6">
                  О бренде
                </h2>
                <p className="text-muted-gray leading-relaxed text-lg">
                  {caseData.brandDescription}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <section>
                <h2 className="text-lg font-sans font-semibold text-graphite uppercase tracking-[0.15em] mb-6">
                  Задача
                </h2>
                <p className="text-muted-gray leading-relaxed text-lg">
                  {caseData.task}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-lg font-sans font-semibold text-graphite uppercase tracking-[0.15em] mb-6">
                  Проблемы
                </h2>
                <ul className="space-y-3">
                  {caseData.problems.map((problem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                      className="flex items-start gap-3 text-muted-gray"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span className="leading-relaxed">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <section>
                <h2 className="text-lg font-sans font-semibold text-graphite uppercase tracking-[0.15em] mb-6">
                  Что было сделано
                </h2>
                <ul className="space-y-4">
                  {caseData.whatWasDone.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i, duration: 0.4 }}
                      className="flex items-start gap-3 text-muted-gray"
                    >
                      <Check
                        size={18}
                        className="text-accent mt-0.5 flex-shrink-0"
                        strokeWidth={2}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-lg font-sans font-semibold text-graphite uppercase tracking-[0.15em] mb-6">
                  Результаты
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseData.results)
                    .filter(([, value]) => value)
                    .map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 * i, duration: 0.5 }}
                        className="bg-cream rounded-sm p-6 text-center editorial-card"
                      >
                        <div className="text-2xl md:text-3xl font-display font-semibold text-accent mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-muted-gray uppercase tracking-wider">
                          {key
                            .replace(/([A-Z])/g, " $1")
                            .trim()
                            .toLowerCase()}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-12">
              <ScrollReveal delay={0.1} direction="right">
                <div className="bg-cream rounded-sm p-8 editorial-card">
                  <h3 className="text-sm font-sans font-semibold text-graphite uppercase tracking-[0.15em] mb-6">
                    Моя зона ответственности
                  </h3>
                  <ul className="space-y-3">
                    {caseData.myRole.map((role, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-sm text-muted-gray"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {caseData.testimonial && (
                <ScrollReveal delay={0.2} direction="right">
                  <div className="bg-cream rounded-sm p-8 editorial-card relative">
                    <Quote className="absolute top-4 right-4 opacity-10" size={24} />
                    <p className="text-graphite leading-relaxed text-sm italic mb-6">
                      &ldquo;{caseData.testimonial.text}&rdquo;
                    </p>
                    <div>
                      <div className="text-sm font-medium text-graphite">
                        {caseData.testimonial.name}
                      </div>
                      <div className="text-xs text-muted-gray">
                        {caseData.testimonial.role}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="border-t border-sand/60 pt-16 text-center">
            <div className="divider mx-auto" />
            <p className="text-muted-gray text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Хотите такой же подход для вашего бренда? Давайте обсудим проект.
            </p>
            <Button size="lg" asChild className="bg-chocolate hover:bg-accent">
              <Link href="/#contacts">Обсудить проект</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mt-20 border-t border-sand/60 pt-8">
            <Link
              href={`/cases/${nextCase.slug}`}
              className="group flex items-center justify-between hover:text-accent transition-colors duration-300"
            >
              <div>
                <span className="text-xs text-muted-gray uppercase tracking-wider">
                  Следующий кейс
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold mt-1">
                  {nextCase.title}
                </h3>
              </div>
              <ArrowRight
                size={24}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
