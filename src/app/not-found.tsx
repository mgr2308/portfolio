import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Страница не найдена | Мария Гусева",
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl md:text-8xl font-serif font-semibold text-accent/30 mb-6">
          404
        </h1>
        <p className="text-xl md:text-2xl font-serif text-graphite mb-4">
          Страница не найдена
        </p>
        <p className="text-muted-gray mb-10 leading-relaxed">
          Возможно, страница была удалена или её никогда не существовало.
        </p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft size={16} strokeWidth={1.5} />
            На главную
          </Link>
        </Button>
      </div>
    </main>
  )
}
