import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ContactFormAnimated } from "@/components/contact-form-animated"
import Image from "next/image"

export default function ContactPage() {
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
            <Link href="/#testimonials" className="text-sm font-medium nav-item">
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm font-medium nav-item">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium nav-item">
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
              <Link href="https://linkedin.com" target="_blank" rel="noop ener noreferrer">
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
                    Get In Touch
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Have a project in mind or just want to say hello? Feel free to reach out.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <ScrollReveal animation="slide-in-left" delay={200}>
                <div className="space-y-6">
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 gradient-text">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Email</div>
                          <a href="mailto:youremail@example.com" className="hover:text-primary transition-colors">
                            youremail@example.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Location</div>
                          <div>Your Location, City, Country</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-primary"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Phone</div>
                          <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-4 gradient-text">Connect With Me</h2>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="rounded-full button-hover" asChild>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full button-hover" asChild>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full button-hover" asChild>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="h-[300px] w-full overflow-hidden rounded-lg bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 shimmer"></div>
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Map"
                      alt="Map"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-in-right" delay={400}>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h2 className="text-xl font-bold mb-6 gradient-text">Send Me a Message</h2>
                  <ContactFormAnimated />
                </div>
              </ScrollReveal>
            </div>
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
