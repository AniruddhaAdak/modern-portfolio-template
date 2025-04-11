import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  date: string
  client: string
  category: string
  technologies: string[]
  features: string[]
  githubUrl: string
  liveUrl: string
  gallery: string[]
}

// This would typically come from a database or API
const getProjectData = (slug: string): Project => {
  return {
    id: slug,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online stores",
    longDescription:
      "This project is a full-featured e-commerce dashboard that allows store owners to manage products, track orders, analyze sales data, and handle customer information. Built with modern technologies, it provides a seamless and intuitive user experience with real-time updates and comprehensive analytics.",
    image: "/placeholder.svg?height=600&width=1200&text=Project+Cover",
    date: "April 2025",
    client: "RetailTech Inc.",
    category: "Web Application",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Redux",
    ],
    features: [
      "Real-time sales analytics",
      "Inventory management",
      "Order processing",
      "Customer relationship management",
      "Multi-store support",
      "Responsive design",
      "Dark mode",
      "Export data to CSV/PDF",
      "Role-based access control",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    gallery: [
      "/placeholder.svg?height=600&width=1200&text=Screenshot+1",
      "/placeholder.svg?height=600&width=1200&text=Screenshot+2",
      "/placeholder.svg?height=600&width=1200&text=Screenshot+3",
    ],
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

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
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <article className="container max-w-5xl py-12 md:py-24">
          <ScrollReveal animation="slide-up">
            <div className="space-y-4">
              <Link
                href="/#projects"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline group button-hover"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-in" delay={200}>
            <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 shimmer"></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal animation="slide-up" delay={300} className="md:col-span-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">Project Overview</h2>
                  <p className="text-muted-foreground">{project.longDescription}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4">Gallery</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg card-hover">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={400}>
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Date</div>
                        <div>{project.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Client</div>
                        <div>{project.client}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Category</div>
                        <div>{project.category}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 button-hover"
                    asChild
                  >
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full button-hover" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
