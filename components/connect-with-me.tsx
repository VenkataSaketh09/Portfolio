import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/VenkataSaketh09" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/muddu-venkata-saketh-5118a7275/" },
  { name: "Email", icon: Mail, url: "mailto:mvsaketh2020@gmail.com" },
]

const featuredProjects = [
  { name: "ExpenseTracker App", url: "https://expense-tracker-saketh.vercel.app/" },
  { name: "AI-Powered Kids Story Generator", url: "https://story-generator-black.vercel.app/" },
]

export function ConnectWithMe() {
  return (
    <section id="connect" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>Find me on these platforms</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" asChild className="w-full justify-start">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="mr-2 h-4 w-4" />
                    {link.name}
                  </Link>
                </Button>
              ))}
              <Button variant="outline" asChild className="w-full justify-start">
                <Link href="/Muddu_Venkata_Saketh_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
              <CardDescription>Check out some of my recent work</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
              {featuredProjects.map((project) => (
                <Button key={project.name} variant="outline" asChild className="w-full justify-start">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.name}
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Interested in collaborating or have a project idea?</p>
          <Button asChild size="lg">
            <Link href="mailto:mvsaketh2020@gmail.com">Let's Work Together</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

