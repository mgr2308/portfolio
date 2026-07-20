import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Мария Гусева — SMM & Content Manager",
  description:
    "Создаю контент, который помогает брендам расти, собирать лояльное сообщество и получать клиентов. Портфолио SMM-специалиста: кейсы, Reels, работа с блогерами.",
  keywords: [
    "SMM",
    "контент-менеджер",
    "портфолио",
    "Мария Гусева",
    "Reels",
    "съемка",
    "блогеры",
    "стратегия",
    "аналитика",
    "визуальная упаковка",
  ],
  authors: [{ name: "Мария Гусева" }],
  openGraph: {
    title: "Мария Гусева — SMM & Content Manager",
    description:
      "Создаю контент, который помогает брендам расти, собирать лояльное сообщество и получать клиентов.",
    type: "website",
    locale: "ru_RU",
    siteName: "Мария Гусева",
    images: [
      {
        url: "/portfolio/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Мария Гусева — SMM & Content Manager",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F7F4EF" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
