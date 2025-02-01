"use client"

import { useRef, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView, useAnimation } from "framer-motion"

const skillCategories = [
  {
    title: "Development Skills",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Jest (Unit Testing)",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Mongoose", "REST APIs"],
  },
  {
    title: "Programming Languages",
    skills: ["Python (Intermediate)", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Version Control and Tools",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Languages",
    skills: ["English (Native Level)", "Telugu (Superior)"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      setHasAnimated(true)
    } else if (hasAnimated) {
      controls.start("hidden")
      setHasAnimated(false)
    }
  }, [isInView, controls, hasAnimated])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} transition={{ duration: 0.5 }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                        variants={itemVariants}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

