import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ArrowLeft } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModeToggle } from "@/components/mode-toggle"

export default function BlogPost({ params }: { params: { slug: string } }) {
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
        <article className="container max-w-3xl py-12 md:py-24 lg:py-32">
          <ScrollReveal animation="slide-up">
            <div className="space-y-4">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline group button-hover"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                How to Build a Modern Web Application
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <time dateTime="2025-04-01">April 1, 2025</time>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={200}>
            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 shimmer"></div>
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Blog+Post+Image"
                alt="Blog post cover image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={400}>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <h2 className="gradient-text">Getting Started</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>
                  {`// Example code
const greeting = "Hello, World!";
console.log(greeting);`}
                </code>
              </pre>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
              <h2 className="gradient-text">Key Concepts</h2>
              <ul>
                <li>First important concept</li>
                <li>Second important concept</li>
                <li>Third important concept</li>
              </ul>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p>"The best way to predict the future is to invent it." - Alan Kay</p>
              </blockquote>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <h2 className="gradient-text">Conclusion</h2>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={600}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t pt-12">
              <div className="text-center">
                <h3 className="text-lg font-bold gradient-text">Share this post</h3>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full button-hover bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90"
                  asChild
                >
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full button-hover bg-[#0077B5] text-white hover:bg-[#0077B5]/90"
                  asChild
                >
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </article>
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
