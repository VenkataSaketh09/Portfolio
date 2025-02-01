"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { Modal } from "@/components/ui/modal"

interface Rating {
  rating: number
  comment: string
  date: string
}

export function RatePortfolio() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const newRating: Rating = {
        rating,
        comment,
        date: new Date().toISOString(),
      }

      // Get existing ratings from local storage
      const existingRatings = JSON.parse(localStorage.getItem("portfolioRatings") || "[]")

      // Add new rating
      existingRatings.push(newRating)

      // Save back to local storage
      localStorage.setItem("portfolioRatings", JSON.stringify(existingRatings))

      setIsModalOpen(true)
      setRating(0)
      setComment("")
    } catch (error) {
      console.error("Failed to submit rating:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Rate My Portfolio</CardTitle>
          <CardDescription>Your feedback is valuable to me!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`cursor-pointer ${star <= rating ? "fill-yellow-400" : "fill-gray-200"}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <div>
              <Textarea
                placeholder="Your Comment (Optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting || rating === 0}>
              {isSubmitting ? "Submitting..." : "Submit Rating"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank you for your valuable rating!"
        description="Your feedback is greatly appreciated."
      />
    </>
  )
}

