import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypewriterEffect } from "./ui/typewriter-effect"

export function Hero() {
  const roles = ["Full-Stack Web Developer", "NextJS Developer", "Node.js Developer", "SDE Intern @TachyonSecSystems"]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 bg-gray-100 p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-xl mb-4">Hi, I am</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Muddu Venkata Saketh</h1>
        <div className="h-8 mb-8">
          <TypewriterEffect texts={roles} className="text-xl text-gray-600" />
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/VenkataSaketh09"
            target="_blank"
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muddu-venkata-saketh-5118a7275/"
            target="_blank"
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:mvsaketh2020@gmail.com"
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-black relative">
        <Image
          src="/photo1.jpg"
          alt="Muddu Venkata Saketh - Profile Picture"
          width={600}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  )
}

