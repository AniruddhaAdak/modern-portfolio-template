import { ScrollReveal } from "@/components/scroll-reveal"

interface TimelineItem {
  date: string
  title: string
  company: string
  description: string
  skills: string[]
}

export function WorkTimeline() {
  const timelineItems: TimelineItem[] = [
    {
      date: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading the frontend development team, implementing new features, and improving performance across the platform. Mentoring junior developers and establishing best practices.",
      skills: ["React", "TypeScript", "Next.js", "GraphQL"],
    },
    {
      date: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description:
        "Developed and maintained web applications for clients across various industries. Worked on both frontend and backend development using modern technologies.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      date: "2018 - 2020",
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      description:
        "Started my professional journey building responsive websites and implementing UI designs. Collaborated with designers and senior developers on various projects.",
      skills: ["HTML/CSS", "JavaScript", "jQuery", "WordPress"],
    },
  ]

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
      {timelineItems.map((item, index) => (
        <ScrollReveal key={index} animation="fade-in" delay={index * 200}>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg border border-muted bg-background/50 backdrop-blur-sm shadow-lg card-hover">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold gradient-text">{item.title}</h3>
                <time className="font-semibold text-sm text-muted-foreground">{item.date}</time>
              </div>
              <div className="text-sm font-medium text-primary mb-2">{item.company}</div>
              <p className="text-muted-foreground mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
