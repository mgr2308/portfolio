import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"
import { WorkProcess } from "@/components/WorkProcess"
import { Skills } from "@/components/Skills"
import { Services } from "@/components/Services"
import { WhyMe } from "@/components/WhyMe"
import { Reviews } from "@/components/Reviews"
import { FAQ } from "@/components/FAQ"
import { Contacts } from "@/components/Contacts"
import { getCases, getServices, getReviews, getFAQ } from "@/lib/directus"

export default async function Home() {
  const [cases, services, reviews, faq] = await Promise.all([
    getCases(),
    getServices(),
    getReviews(),
    getFAQ(),
  ])

  return (
    <>
      <Hero />
      <About />
      <Projects cases={cases} />
      <WorkProcess />
      <Skills />
      <Services services={services} />
      <WhyMe />
      <Reviews reviews={reviews} />
      <FAQ faq={faq} />
      <Contacts />
    </>
  )
}
