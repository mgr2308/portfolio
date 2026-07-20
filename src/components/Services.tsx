"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"
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
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent/40" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
              Услуги
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
            Услуги
          </h2>
          
          <p className="text-muted-gray text-lg max-w-xl mb-16">
            Выберите формат сотрудничества, который подходит именно вам
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="editorial-card p-6 md:p-8 flex flex-col transition-shadow duration-500 hover:shadow-lg"
            >
              <h3 className="text-xl font-display font-semibold text-graphite mb-3">
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
                      className="text-accent mt-0.5 flex-shrink-0"
                      strokeWidth={2}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-sand/40">
                <div className="text-xs text-muted-gray uppercase tracking-wider mb-1">
                  от
                </div>
                <div className="text-2xl font-display font-semibold text-accent">
                  {service.price} ₽
                </div>
                <div className="text-xs text-muted-gray mt-1">
                  {service.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="divider mx-auto" />
          <p className="text-muted-gray text-sm mb-6">
            Не нашли подходящий формат? Напишите мне — обсудим индивидуальные условия.
          </p>
          <Button size="lg" asChild className="bg-chocolate hover:bg-accent">
            <Link href="#contacts">Обсудить</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
