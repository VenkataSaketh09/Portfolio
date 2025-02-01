"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Modal } from "@/components/ui/modal"

interface ContactMessage {
  name: string
  email: string
  message: string
  date: string
}

export function ContactMe() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const newMessage: ContactMessage = {
        name,
        email,
        message,
        date: new Date().toISOString(),
      }

      // Get existing messages from local storage
      const existingMessages = JSON.parse(localStorage.getItem("portfolioMessages") || "[]")

      // Add new message
      existingMessages.push(newMessage)

      // Save back to local storage
      localStorage.setItem("portfolioMessages", JSON.stringify(existingMessages))

      setIsModalOpen(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Failed to submit the form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Get in touch with me</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank you for contacting me!"
        description="I'll get back to you as soon as possible."
      />
    </>
  )
}

