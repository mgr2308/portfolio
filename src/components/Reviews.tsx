"use client"

import { useState, useRef } from "react"
import { motion, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"
import reviewsData from "@/data/reviews.json"
import type { ReviewItem } from "@/lib/directus"

interface Props {
  reviews?: ReviewItem[]
}

export function Reviews({ reviews: reviewsProp }: Props) {
  const reviews = reviewsProp ?? reviewsData
  const [current, setCurrent] = useState(0)
  const constraintsRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % reviews.length)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) handleNext()
    if (info.offset.x > 50) handlePrev()
  }

  return (
    <section id="reviews" className="section-padding bg-white relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Отзывы
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Что говорят клиенты
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            О сотрудничестве со мной
          </p>
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto">
          <div ref={constraintsRef} className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="editorial-card p-8 md:p-10 relative"
              >
                <Quote className="absolute top-6 right-6 opacity-10" size={48} strokeWidth={1} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-accent"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-graphite text-base md:text-lg leading-relaxed mb-8 font-serif italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-sand/40">
                  <div className="w-12 h-12 rounded-full bg-sand/40 flex items-center justify-center text-accent/40 text-xs font-medium overflow-hidden">
                    {reviews[current].image ? (
                      <div className="w-full h-full bg-sand/30" />
                    ) : (
                      reviews[current].name.charAt(0)
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-graphite">
                      {reviews[current].name}
                    </div>
                    <div className="text-xs text-muted-gray">
                      {reviews[current].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-sand/60 flex items-center justify-center text-graphite hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-accent w-8"
                      : "bg-sand hover:bg-accent/30 w-4"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-sand/60 flex items-center justify-center text-graphite hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
