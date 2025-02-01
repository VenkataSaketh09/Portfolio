"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  texts: string[]
  delay?: number
  className?: string
}

export function TypewriterEffect({ texts, delay = 150, className = "" }: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentFullText = texts[currentTextIndex]

        if (!isDeleting) {
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.slice(0, currentText.length + 1))
          } else {
            setIsDeleting(true)
            setTimeout(() => {}, 1000) // Pause at the end
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentFullText.slice(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((current) => (current + 1) % texts.length)
          }
        }
      },
      isDeleting ? delay / 2 : delay,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, delay, isDeleting, texts])

  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

