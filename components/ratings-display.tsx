"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Rating {
  _id: string
  name: string
  rating: number
  comment: string
  createdAt: string
}

export function RatingsDisplay() {
  const [ratings, setRatings] = useState<Rating[]>([])

  useEffect(() => {
    const fetchRatings = async () => {
      const response = await fetch("/api/ratings")
      if (response.ok) {
        const data = await response.json()
        setRatings(data)
      }
    }
    fetchRatings()
  }, [])

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-center">Recent Ratings</h3>
      {ratings.map((rating) => (
        <Card key={rating._id}>
          <CardHeader>
            <CardTitle>{rating.name}</CardTitle>
            <CardDescription>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`inline ${star <= rating.rating ? "fill-yellow-400" : "fill-gray-200"}`} />
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{rating.comment}</p>
            <p className="text-sm text-gray-500 mt-2">{new Date(rating.createdAt).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

