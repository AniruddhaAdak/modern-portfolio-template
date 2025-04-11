"use client"

import { useEffect, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number
  color: string
  category: "frontend" | "backend" | "design" | "tools"
}

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [isVisible, setIsVisible] = useState(false)

  const skills: Skill[] = [
    { name: "HTML", level: 95, color: "bg-orange-500", category: "frontend" },
    { name: "CSS", level: 90, color: "bg-blue-500", category: "frontend" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500", category: "frontend" },
    { name: "TypeScript", level: 85, color: "bg-blue-600", category: "frontend" },
    { name: "React", level: 90, color: "bg-cyan-500", category: "frontend" },
    { name: "Next.js", level: 88, color: "bg-black", category: "frontend" },
    { name: "Tailwind CSS", level: 95, color: "bg-cyan-400", category: "frontend" },
    { name: "Node.js", level: 85, color: "bg-green-600", category: "backend" },
    { name: "Express", level: 82, color: "bg-gray-600", category: "backend" },
    { name: "MongoDB", level: 80, color: "bg-green-700", category: "backend" },
    { name: "PostgreSQL", level: 75, color: "bg-blue-700", category: "backend" },
    { name: "GraphQL", level: 70, color: "bg-pink-600", category: "backend" },
    { name: "UI/UX Design", level: 85, color: "bg-purple-500", category: "design" },
    { name: "Figma", level: 80, color: "bg-purple-600", category: "design" },
    { name: "Git", level: 90, color: "bg-orange-600", category: "tools" },
    { name: "Docker", level: 75, color: "bg-blue-600", category: "tools" },
    { name: "AWS", level: 70, color: "bg-yellow-600", category: "tools" },
    { name: "CI/CD", level: 75, color: "bg-green-500", category: "tools" },
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  useEffect(() => {
    setIsVisible(true)
  }, [activeCategory])

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {["all", "frontend", "backend", "design", "tools"].map((category) => (
          <Badge
            key={category}
            className={`px-4 py-2 text-sm capitalize cursor-pointer transition-all button-hover ${
              activeCategory === category ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
            }`}
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => {
                setActiveCategory(category)
              }, 300)
            }}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => (
          <ScrollReveal key={skill.name} animation="slide-up" delay={index * 50}>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
