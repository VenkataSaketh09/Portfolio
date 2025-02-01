import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ExpenseTracker App",
    imageSrc: "/project1.png",
    technologies: ["Next.js", "React", "Shadcn UI", "Drizzle ORM"],
    liveLink: "https://expense-tracker-saketh.vercel.app/",
    githubLink: "https://github.com/VenkataSaketh09/Expense_Tracker",
  },
  {
    title: "AI-Powered Kids Story Generator",
    imageSrc: "/project2.png",
    technologies: ["Next.js", "React", "NextUI", "Gemini AI API", "Drizzle ORM"],
    liveLink: "https://story-generator-black.vercel.app/",
    githubLink: "https://github.com/VenkataSaketh09/Story-Generator",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-4 relative h-48 w-full">
                  <Image
                    src={project.imageSrc || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

