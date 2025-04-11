import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { WorkTimeline } from "@/components/work-timeline"

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="gradient-text">Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium nav-item">
              About
            </Link>
            <Link href="/#projects" className="text-sm font-medium nav-item">
              Projects
            </Link>
            <Link href="/#skills" className="text-sm font-medium nav-item">
              Skills
            </Link>
            <Link href="/experience" className="text-sm font-medium nav-item">
              Experience
            </Link>
            <Link href="/blog" className="text-sm font-medium nav-item">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium nav-item">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="outline" size="icon" className="rounded-full button-hover" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full button-hover" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full button-hover" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    Work Experience
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    My professional journey and career highlights.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto max-w-4xl py-12">
              <WorkTimeline />
            </div>
            <ScrollReveal delay={800}>
              <div className="flex justify-center mt-12">
                <Button
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 button-hover"
                  asChild
                >
                  <Link href="/#contact">Get In Touch</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-r from-violet-600/10 to-purple-600/10">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} <span className="gradient-text font-semibold">Your Name</span>. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full button-hover" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full button-hover" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full button-hover" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
