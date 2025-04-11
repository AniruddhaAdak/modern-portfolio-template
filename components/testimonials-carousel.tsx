"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
}

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CTO",
      company: "TechCorp",
      content:
        "Working with this developer was an absolute pleasure. They delivered a high-quality website that exceeded our expectations. Their attention to detail and ability to understand our requirements was impressive.",
      image: "/placeholder.svg?height=100&width=100&text=AJ",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Founder",
      company: "DesignStudio",
      content:
        "I've worked with many developers over the years, but none have been as professional and skilled as this one. They took our vague ideas and turned them into a beautiful, functional website that perfectly represents our brand.",
      image: "/placeholder.svg?height=100&width=100&text=SW",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateTech",
      content:
        "The developer's technical expertise and creative problem-solving skills made our project a success. They were responsive, met all deadlines, and were a joy to work with. I highly recommend their services.",
      image: "/placeholder.svg?height=100&width=100&text=MC",
    },
  ]

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("right")
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("left")
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <div className="relative">
      <div className="overflow-hidden py-10">
        <div
          className={`flex transition-transform duration-500 ease-out ${
            isAnimating ? (direction === "right" ? "-translate-x-[100%]" : "translate-x-[100%]") : "translate-x-0"
          }`}
        >
          <Card className="w-full border-none shadow-lg bg-gradient-to-br from-background to-muted/50">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-70 blur"></div>
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-background">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <Quote className="h-10 w-10 text-primary/20 mx-auto md:mx-0" />
                  <p className="text-lg italic">{testimonials[activeIndex].content}</p>
                  <div>
                    <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
            }`}
            onClick={() => {
              setDirection(index > activeIndex ? "right" : "left")
              setActiveIndex(index)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10 button-hover"
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10 button-hover"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
