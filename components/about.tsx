"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function About() {
  const [activeSection, setActiveSection] = useState<"experience" | "education" | "achievements">("experience")

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8">
            Full-Stack Web Developer passionate about building scalable and efficient web applications. Proficient in
            Python, React, Next.js, and Node.js, with a strong focus on creating seamless user experiences and
            responsive designs. Impact-driven projects centered on scalability and innovation.
          </p>

          <div className="mb-8 flex justify-center space-x-4">
            <Button
              onClick={() => setActiveSection("experience")}
              variant={activeSection === "experience" ? "default" : "outline"}
            >
              Experience
            </Button>
            <Button
              onClick={() => setActiveSection("education")}
              variant={activeSection === "education" ? "default" : "outline"}
            >
              Education
            </Button>
            <Button
              onClick={() => setActiveSection("achievements")}
              variant={activeSection === "achievements" ? "default" : "outline"}
            >
              Achievements
            </Button>
          </div>

          <motion.div key={activeSection} initial="hidden" animate="visible" variants={cardVariants}>
            {activeSection === "experience" && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">SDE Intern (MERN Stack Developer) - Tachyonsec Systems Pvt.Ltd</h4>
                      <p className="text-gray-600 text-sm">December 2023 - Present</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                        <li>Developed backend functionalities to support network automation solutions</li>
                        <li>Designed and implemented device category models</li>
                        <li>Collaborated on backend development to ensure high-quality deliverables</li>
                        <li>Tested REST APIs using Jest, achieving 95%+ test coverage</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "education" && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Vishnu Institute of Technology</h4>
                      <p className="text-gray-600">B.Tech Information Technology - 9.00</p>
                      <p className="text-gray-600 text-sm">2020-2024</p>
                    </div>
                    <div>
                      <h4 className="font-medium">IIIT Srikakulam</h4>
                      <p className="text-gray-600">Pre University Course - 9.41</p>
                      <p className="text-gray-600 text-sm">2020-2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeSection === "achievements" && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Certifications & Achievements</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Solution Challenge(GDSC) Certification - Google Developer Student Club</li>
                    <li>Internal SIH Certification - Smart India Hackathon</li>
                    <li>SQL Certification - Coursera</li>
                    <li>Completed 100 days of solving problems on LeetCode</li>
                    <li>Completed the 45 Days Arsh Goyal DSA Challenge</li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </motion.div>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/Muddu_Venkata_Saketh_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

