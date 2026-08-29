import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="eyebrow-rule" />
              <span className="eyebrow-label">Портфолио</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-semibold text-charcoal leading-[0.95] mb-6">
              Мария
              <br />
              <span className="font-display-alt">Гусева</span>
            </h1>

            <p className="text-charcoal font-sans text-sm mb-8 font-medium">
              SMM & Content Manager
            </p>

            <p className="text-muted-gray text-base md:text-lg leading-relaxed max-w-lg mb-10 text-balance">
              моя задача: создавать уникальный голос бренда в социальных
              медиа, а также контент, который помогает брендам расти,
              собирать лояльное сообщество и получать клиентов.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#projects">Посмотреть кейсы</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contacts">Связаться</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="photo-frame w-[400px] h-[500px]">
              <img
                src="/images/hero-photo.jpg"
                alt="Мария Гусева"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-gray">
          Листай ниже
        </span>
        <ArrowDown
          size={16}
          className="text-muted-gray animate-bounce"
          strokeWidth={1.5}
        />
      </div>
    </section>
  )
}
