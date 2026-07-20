"use client"

import { motion } from "framer-motion"
import { Send, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"

const telegramLink = "https://t.me/mariaguseva"

export function Contacts() {
  return (
    <section id="contacts" className="section-padding bg-white relative">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-accent/40" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                Контакты
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
              Связаться со мной
            </h2>
            
            <p className="text-muted-gray text-lg max-w-md mb-12">
              Напишите мне, и я отвечу в течение 24 часов
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <motion.a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-6 editorial-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Send size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-medium text-graphite">Telegram</div>
                  <div className="text-sm text-muted-gray">@mariaguseva</div>
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/mariaguseva"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-6 editorial-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Instagram size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-medium text-graphite">Instagram</div>
                  <div className="text-sm text-muted-gray">@mariaguseva</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:maria@example.com"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-6 editorial-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-medium text-graphite">Email</div>
                  <div className="text-sm text-muted-gray">maria@example.com</div>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-8 bg-cream rounded-sm border border-sand/40"
            >
              <p className="text-graphite text-sm leading-relaxed mb-4">
                Скачайте мое резюме в PDF, чтобы сохранить или отправить рекрутеру.
              </p>
              <Button variant="outline" size="sm" asChild className="border-chocolate text-chocolate hover:bg-chocolate hover:text-white">
                <a href="/portfolio/resume.pdf" download>
                  Скачать резюме (PDF)
                </a>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
