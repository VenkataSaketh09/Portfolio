import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            MS
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About me
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#contact-and-rate" className="text-gray-600 hover:text-gray-900">
              Contact Me
            </Link>
            <Button asChild>
              <Link href="#contact-and-rate">Rate My Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

