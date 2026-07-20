"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ScrollReveal"
import { cn } from "@/lib/utils"

const telegramLink = "https://t.me/mariaguseva"

export function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    telegram: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form handling — можно подключить Telegram Bot API или email-сервис
    alert("Спасибо! Я свяжусь с вами в ближайшее время.")
    setFormData({ name: "", phone: "", telegram: "", message: "" })
  }

  const inputClasses =
    "w-full bg-cream border border-sand/60 rounded-sm px-4 py-3 text-sm text-graphite placeholder:text-muted-gray/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"

  return (
    <section id="contacts" className="section-padding bg-white relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent/40" />
                <span className="text-xs text-accent tracking-[0.3em] uppercase font-medium">
                  Контакты
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-graphite mb-4 leading-[1.1]">
                Давайте обсудим проект
              </h2>
              
              <p className="text-muted-gray text-lg max-w-md mb-12">
                Напишите мне, и я отвечу в течение 24 часов
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-muted-gray uppercase tracking-wider mb-2 font-medium">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Как вас зовут?"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-gray uppercase tracking-wider mb-2 font-medium">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-gray uppercase tracking-wider mb-2 font-medium">
                    Telegram
                  </label>
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="@username"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted-gray uppercase tracking-wider mb-2 font-medium">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className={cn(inputClasses, "resize-none")}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group bg-chocolate hover:bg-accent">
                  <span>Отправить</span>
                  <Send
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    strokeWidth={2}
                  />
                </Button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <div className="lg:pt-12">
              <div className="space-y-10">
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
                className="mt-12 p-8 bg-cream rounded-sm border border-sand/40"
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
