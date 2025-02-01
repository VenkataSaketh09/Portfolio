import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { ContactMe } from "@/components/contact-me"
import { RatePortfolio } from "@/components/rate-portfolio"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <section id="contact-and-rate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ContactMe />
            <RatePortfolio />
          </div>
        </div>
      </section>
    </main>
  )
}

