import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CasePage } from "@/components/CasePage"
import { getCaseBySlug, getCases } from "@/lib/directus"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseData = await getCaseBySlug(slug)

  if (!caseData) {
    return { title: "Кейс не найден" }
  }

  return {
    title: `${caseData.title} — Кейс | Мария Гусева`,
    description: caseData.description,
    openGraph: {
      title: `${caseData.title} — Кейс | Мария Гусева`,
      description: caseData.description,
    },
  }
}

export async function generateStaticParams() {
  const cases = await getCases()
  return cases.map((c) => ({ slug: c.slug }))
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cases = await getCases()
  const caseData = cases.find((c) => c.slug === slug)

  if (!caseData) {
    notFound()
  }

  const currentIndex = cases.findIndex((c) => c.slug === slug)
  const nextCase = cases[currentIndex + 1] || cases[0]

  return (
    <CasePage
      caseData={caseData}
      nextCase={{ slug: nextCase.slug, title: nextCase.title }}
    />
  )
}
