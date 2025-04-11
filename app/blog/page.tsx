import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Github, Linkedin, Twitter, ArrowRight, ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModeToggle } from "@/components/mode-toggle"

export default function BlogPage() {
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Blog</h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Thoughts, ideas, and insights on web development, design, and technology.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <ScrollReveal key={index} delay={index * 100} animation="slide-up">
                  <Card className="overflow-hidden card-hover border-none shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 shimmer"></div>
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=Blog+Post+${index + 1}`}
                        alt={`Blog Post ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-sm text-muted-foreground">April {index + 1}, 2025</div>
                      <h2 className="text-xl font-bold gradient-text">How to Build a Modern Web Application</h2>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full button-hover group" asChild>
                        <Link href={`/blog/post-${index + 1}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={900}>
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="outline" size="icon" className="rounded-full button-hover" disabled>
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous Page</span>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full w-10 h-10 button-hover bg-primary text-primary-foreground"
                >
                  1
                </Button>
                <Button variant="outline" className="rounded-full w-10 h-10 button-hover">
                  2
                </Button>
                <Button variant="outline" className="rounded-full w-10 h-10 button-hover">
                  3
                </Button>
                <Button variant="outline" size="icon" className="rounded-full button-hover">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next Page</span>
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
