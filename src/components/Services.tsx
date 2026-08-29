import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import servicesData from "@/data/services.json"
import type { ServiceItem } from "@/lib/directus"

interface Props {
  services?: ServiceItem[]
}

export function Services({ services: servicesProp }: Props) {
  const data = servicesProp ?? servicesData
  return (
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <div className="eyebrow-rule" />
          <span className="eyebrow-label">Услуги</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
          Услуги
        </h2>

        <p className="text-muted-gray text-lg max-w-xl mb-16">
          Выберите формат сотрудничества, который подходит именно вам
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.map((service) => (
            <div
              key={service.id}
              className="bordered-card p-6 md:p-8 flex flex-col"
            >
              <h3 className="text-xl font-sans font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-muted-gray text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-muted-gray"
                  >
                    <Check
                      size={14}
                      className="text-charcoal mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border-light">
                <div className="text-xs text-muted-gray mb-1">
                  от
                </div>
                <div className="text-2xl font-sans font-semibold text-charcoal">
                  {service.price} ₽
                </div>
                <div className="text-xs text-muted-gray mt-1">
                  {service.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="hairline mx-auto" />
          <p className="text-muted-gray text-sm mb-6">
            Не нашли подходящий формат? Напишите мне — обсудим индивидуальные условия.
          </p>
          <Button size="lg" asChild>
            <Link href="#contacts">Обсудить</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
