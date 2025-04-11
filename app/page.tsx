import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Download,
  ArrowRight,
  ExternalLink,
  Code,
  Users,
  Coffee,
} from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MobileNav } from "@/components/mobile-nav"
import { SkillsShowcase } from "@/components/skills-showcase"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AnimatedCounter } from "@/components/animated-counter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="gradient-text">Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium nav-item">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium nav-item">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium nav-item">
              Skills
            </Link>
            <Link href="#testimonials" className="text-sm font-medium nav-item">
              Testimonials
            </Link>
            <Link href="#blog" className="text-sm font-medium nav-item">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium nav-item">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <ScrollReveal animation="slide-in-left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Hi, I&apos;m <span className="text-white">Your Name</span> – Full Stack Developer
                    </h1>
                    <p className="max-w-[600px] text-white/80 md:text-xl">
                      I build accessible, responsive, and functional web applications with modern technologies.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-white text-primary hover:bg-white/90 button-hover">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 button-hover">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-white hover:bg-white/10 button-hover"
                      asChild
                    >
                      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-white hover:bg-white/10 button-hover"
                      asChild
                    >
                      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-white hover:bg-white/10 button-hover"
                      asChild
                    >
                      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-in-right">
                <div className="flex items-center justify-center">
                  <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] floating">
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-xl"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      alt="Hero Image"
                      fill
                      className="object-cover rounded-full border-4 border-white/20"
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <ScrollReveal animation="slide-up" delay={0}>
                <div className="space-y-2">
                  <Code className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="text-3xl font-bold">
                    <AnimatedCounter end={150} suffix="+" />
                  </h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={200}>
                <div className="space-y-2">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="text-3xl font-bold">
                    <AnimatedCounter end={80} suffix="+" />
                  </h3>
                  <p className="text-muted-foreground">Satisfied Clients</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={400}>
                <div className="space-y-2">
                  <Coffee className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="text-3xl font-bold">
                    <AnimatedCounter end={5} suffix="+" />
                  </h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-up" delay={600}>
                <div className="space-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 mx-auto text-primary"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <h3 className="text-3xl font-bold">
                    <AnimatedCounter end={99} prefix="$" suffix="K+" />
                  </h3>
                  <p className="text-muted-foreground">Revenue Generated</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    About Me
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Get to know more about my background, skills, and experience.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal animation="slide-in-left" delay={200}>
                <div className="flex justify-center">
                  <div className="relative h-[300px] w-[300px]">
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse-slow"></div>
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Profile"
                      fill
                      className="object-cover rounded-full border-4 border-primary/20"
                    />
                    <div className="absolute -inset-1 rounded-full border-2 border-dashed border-primary/40 rotate-slow"></div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slide-in-right" delay={400}>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      I&apos;m a passionate Full Stack Developer with over 5 years of experience in building web
                      applications. I specialize in JavaScript, React, Node.js, and modern web technologies.
                    </p>
                    <p className="text-muted-foreground">
                      My journey in tech started when I built my first website at the age of 15. Since then, I&apos;ve
                      been constantly learning and improving my skills to create better digital experiences.
                    </p>
                    <p className="text-muted-foreground">
                      When I&apos;m not coding, you can find me hiking, reading, or experimenting with new technologies.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold gradient-text">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-500 hover:bg-blue-600 button-hover">JavaScript</Badge>
                      <Badge className="bg-blue-600 hover:bg-blue-700 button-hover">TypeScript</Badge>
                      <Badge className="bg-cyan-500 hover:bg-cyan-600 button-hover">React</Badge>
                      <Badge className="bg-black hover:bg-gray-800 button-hover">Next.js</Badge>
                      <Badge className="bg-green-500 hover:bg-green-600 button-hover">Node.js</Badge>
                      <Badge className="bg-gray-500 hover:bg-gray-600 button-hover">Express</Badge>
                      <Badge className="bg-green-600 hover:bg-green-700 button-hover">MongoDB</Badge>
                      <Badge className="bg-blue-400 hover:bg-blue-500 button-hover">PostgreSQL</Badge>
                      <Badge className="bg-cyan-400 hover:bg-cyan-500 button-hover">Tailwind CSS</Badge>
                      <Badge className="bg-orange-500 hover:bg-orange-600 button-hover">Git</Badge>
                      <Badge className="bg-blue-500 hover:bg-blue-600 button-hover">Docker</Badge>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600 button-hover">AWS</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold gradient-text">Education</h3>
                    <p className="text-muted-foreground">
                      Bachelor of Science in Computer Science
                      <br />
                      University Name, 2015-2019
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    My Skills
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    A comprehensive overview of my technical expertise and proficiency levels.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto max-w-5xl py-12">
              <SkillsShowcase />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    Projects
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Check out some of my recent work and personal projects.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((project, index) => (
                <ScrollReveal key={project} delay={index * 100} animation="slide-up">
                  <Card className="overflow-hidden card-hover border-none shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 shimmer"></div>
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=Project+${project}`}
                        alt={`Project ${project}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="gradient-text">Project {project}</CardTitle>
                      <CardDescription>
                        A brief description of this project and what technologies were used.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge
                          variant="outline"
                          className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 button-hover"
                        >
                          React
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-950 button-hover"
                        >
                          Node.js
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 button-hover"
                        >
                          MongoDB
                        </Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" className="button-hover" asChild>
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 button-hover"
                        asChild
                      >
                        <Link href="#" target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    Client Testimonials
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    What my clients say about working with me.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto max-w-5xl py-12">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    Latest Blog Posts
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Read my thoughts on technology, development, and more.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((post, index) => (
                <ScrollReveal key={post} delay={index * 200} animation="slide-up">
                  <Card className="overflow-hidden card-hover border-none shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 shimmer"></div>
                      <Image
                        src={`/placeholder.svg?height=300&width=500&text=Blog+Post+${post}`}
                        alt={`Blog Post ${post}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-sm text-muted-foreground">April {post}, 2025</div>
                      <CardTitle className="gradient-text">How to Build a Modern Web Application</CardTitle>
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
                        <Link href="/blog/post-1">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={600}>
              <div className="flex justify-center">
                <Button variant="outline" className="button-hover group" asChild>
                  <Link href="/blog">
                    View All Posts
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                    Get In Touch
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Have a project in mind or just want to say hello? Feel free to reach out.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <ScrollReveal animation="slide-in-left" delay={200}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>youremail@example.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>Your Location, City, Country</p>
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
                <div className="space-y-4">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="border-primary/20 focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="border-primary/20 focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        className="border-primary/20 focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-[150px] border-primary/20 focus:border-primary transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 button-hover"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
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
