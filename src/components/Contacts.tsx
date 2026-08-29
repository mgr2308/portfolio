import { Send, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const telegramLink = "https://t.me/mariaguseva"

export function Contacts() {
  return (
    <section id="contacts" className="section-padding bg-cream relative">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-rule" />
            <span className="eyebrow-label">Контакты</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-charcoal mb-4 leading-[1.1]">
            Связаться со мной
          </h2>

          <p className="text-muted-gray text-lg max-w-md mb-12">
            Напишите мне, и я отвечу в течение 24 часов
          </p>

          <div className="space-y-4">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bordered-card flex items-center gap-4 p-6"
            >
              <div className="w-12 h-12 rounded-pill bg-charcoal shadow-inset flex items-center justify-center flex-shrink-0">
                <Send size={20} className="text-off-white" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-charcoal">Telegram</div>
                <div className="text-sm text-muted-gray">@mariaguseva</div>
              </div>
            </a>

            <a
              href="https://instagram.com/mariaguseva"
              target="_blank"
              rel="noopener noreferrer"
              className="bordered-card flex items-center gap-4 p-6"
            >
              <div className="w-12 h-12 rounded-pill bg-charcoal shadow-inset flex items-center justify-center flex-shrink-0">
                <Instagram size={20} className="text-off-white" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-charcoal">Instagram</div>
                <div className="text-sm text-muted-gray">@mariaguseva</div>
              </div>
            </a>

            <a
              href="mailto:maria@example.com"
              className="bordered-card flex items-center gap-4 p-6"
            >
              <div className="w-12 h-12 rounded-pill bg-charcoal shadow-inset flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-off-white" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-sm font-medium text-charcoal">Email</div>
                <div className="text-sm text-muted-gray">maria@example.com</div>
              </div>
            </a>
          </div>

          <div className="mt-8 p-8 bg-charcoal-03 rounded-card border border-border-light">
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Скачайте мое резюме в PDF, чтобы сохранить или отправить рекрутеру.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="/resume.pdf" download>
                Скачать резюме (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
