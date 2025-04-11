"use client"

import { useEffect, useRef, type ReactNode } from "react"

type AnimationType = "fade-in" | "slide-up" | "slide-in-right" | "slide-in-left" | "bounce-in"

interface ScrollRevealProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  threshold?: number
}

export function ScrollReveal({ children, animation = "fade-in", delay = 0, threshold = 0.1 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`)
              entry.target.classList.remove("opacity-0")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [animation, delay, threshold])

  return (
    <div ref={ref} className="opacity-0" style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
