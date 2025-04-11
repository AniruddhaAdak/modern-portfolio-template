"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggleAnimated() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full w-10 h-10 relative">
        <span className="sr-only">Toggle theme</span>
        <div className="h-5 w-5 bg-muted-foreground/30 rounded-full" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 relative overflow-hidden button-hover"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun
          className={`h-5 w-5 transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${
          theme === "dark"
            ? "from-blue-800/20 to-purple-800/20 opacity-100"
            : "from-yellow-300/20 to-orange-300/20 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
