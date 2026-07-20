"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/ScrollReveal"
import { Play } from "lucide-react"

const reels = [
  { id: 1, title: "Вирусный Reels · KITTY NAILS", views: "1,5 млн", image: "/images/reel-1.jpg" },
  { id: 2, title: "Съемка блюд · Koreana Light", views: "800 тыс", image: "/images/reel-2.jpg" },
  { id: 3, title: "Закулисье съемки · EatMe", views: "500 тыс", image: "/images/reel-3.jpg" },
  { id: 4, title: "Процесс работы · MI Tattoo", views: "300 тыс", image: "/images/reel-4.jpg" },
  { id: 5, title: "Beauty Reels · KITTY NAILS", views: "250 тыс", image: "/images/reel-5.jpg" },
  { id: 6, title: "Сторителлинг · EatMe", views: "200 тыс", image: "/images/reel-6.jpg" },
]

export function ReelsFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-graphite mb-4">
            Мои Reels
          </h2>
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Избранные работы, которые собрали миллионы просмотров
          </p>
        </ScrollReveal>
      </div>

      <div ref={containerRef} className="relative">
        <div className="flex gap-4 px-6 md:px-12 lg:px-24 overflow-x-auto pb-4 no-scrollbar">
          {reels.map((reel, i) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-[160px] md:w-[200px] aspect-[9/16] bg-sand/30 rounded-sm overflow-hidden relative mb-3 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-accent/10">
                <div className="w-full h-full flex items-center justify-center text-accent/20">
                  <Play size={40} fill="currentColor" />
                </div>
                <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/10 transition-colors duration-300 flex items-center justify-center">
                  <Play
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="white"
                  />
                </div>
              </div>
              <h4 className="text-xs md:text-sm font-medium text-graphite group-hover:text-accent transition-colors duration-300 truncate w-[160px] md:w-[200px]">
                {reel.title}
              </h4>
              <p className="text-xs text-muted-gray">{reel.views} просмотров</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
