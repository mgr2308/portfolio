"use client"

import { useState, useRef } from "react"
import { motion, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
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
    <section id="reviews" className="section-padding bg-cream relative">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">Отзывы</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Что говорят клиенты
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          О сотрудничестве со мной
        </p>

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
                className="bordered-card p-8 md:p-10 relative"
              >
                <Quote className="absolute top-6 right-6 opacity-10" size={48} strokeWidth={1} />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-charcoal"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-charcoal text-base md:text-lg leading-relaxed mb-8 font-display-alt">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-border-light">
                  <div className="w-12 h-12 rounded-pill bg-charcoal-04 flex items-center justify-center text-muted-gray text-xs font-medium overflow-hidden">
                    {reviews[current].image ? (
                      <div className="w-full h-full bg-charcoal-04" />
                    ) : (
                      reviews[current].name.charAt(0)
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">
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
              className="w-10 h-10 rounded-pill border border-border-light flex items-center justify-center text-charcoal hover:border-charcoal-40 transition-colors duration-250 ease-standard"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-pill transition-all duration-250 ease-standard ${
                    i === current
                      ? "bg-charcoal w-8"
                      : "bg-border-light hover:bg-charcoal-40 w-4"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-pill border border-border-light flex items-center justify-center text-charcoal hover:border-charcoal-40 transition-colors duration-250 ease-standard"
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
