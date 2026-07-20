import { createDirectus, rest, readItems, readItem } from "@directus/sdk"

export interface CaseItem {
  slug: string
  title: string
  category: string
  year: string
  description: string
  brandDescription: string
  task: string
  problems: string[]
  whatWasDone: string[]
  myRole: string[]
  results: Record<string, string>
  images: string[]
  videos: string[]
  statsScreenshots: string[]
  testimonial: { text: string; name: string; role: string }
}

export interface ServiceItem {
  id: string
  title: string
  description: string
  price: string
  duration: string
  features: string[]
}

export interface ReviewItem {
  id: number
  name: string
  role: string
  text: string
  image: string
}

export interface FAQItem {
  question: string
  answer: string
}

interface Schema {
  cases: CaseItem[]
  services: ServiceItem[]
  reviews: ReviewItem[]
  faq: FAQItem[]
}

const directusUrl = process.env.DIRECTUS_URL || "http://localhost:8055"

function createClient() {
  return createDirectus<Schema>(directusUrl).with(rest())
}

export async function getCases(): Promise<CaseItem[]> {
  try {
    const client = createClient()
    return await client.request(readItems("cases"))
  } catch {
    const { default: cases } = await import("@/data/cases.json")
    return cases as unknown as CaseItem[]
  }
}

export async function getCaseBySlug(slug: string): Promise<CaseItem | null> {
  try {
    const client = createClient()
    const items = await client.request(readItems("cases", {
      filter: { slug: { _eq: slug } },
      limit: 1,
    }))
    return (items as unknown as CaseItem[])[0] || null
  } catch {
    const { default: cases } = await import("@/data/cases.json")
    return ((cases as unknown as CaseItem[]).find((c) => c.slug === slug)) || null
  }
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const client = createClient()
    return await client.request(readItems("services"))
  } catch {
    const { default: services } = await import("@/data/services.json")
    return services as unknown as ServiceItem[]
  }
}

export async function getReviews(): Promise<ReviewItem[]> {
  try {
    const client = createClient()
    return await client.request(readItems("reviews"))
  } catch {
    const { default: reviews } = await import("@/data/reviews.json")
    return reviews as unknown as ReviewItem[]
  }
}

export async function getFAQ(): Promise<FAQItem[]> {
  try {
    const client = createClient()
    return await client.request(readItems("faq"))
  } catch {
    const { default: faq } = await import("@/data/faq.json")
    return faq as unknown as FAQItem[]
  }
}
