import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Personal Finance Application",
    description:
      "Full-stack finance app with expense tracking and savings analytics. Integrated a machine learning model to predict savings outcomes and implemented Power BI dashboards for data visualization.",
    technologies: ["Python", "Machine Learning", "SQL", "React Native", "Docker", "Power BI"],
    github: "https://github.com/MuhammadChoudhry1/financeApp",
    image: "/image.png",
  },
  {
    title: "Abafoteq Corporate Website",
    description:
      "Modern, responsive corporate website for Abafoteq Ltd to showcase services, projects, and company profile. Optimized for performance, usability, and cross-device compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://abafoteq.com/",
    image: "/Screenshot 2026-01-15 011041.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A showcase of my technical work and professional contributions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden bg-muted/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="px-3 py-1 text-xs font-medium border-muted-foreground/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {"github" in project && (
                    <Button variant="default" size="default" className="flex-1 font-medium" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {"link" in project && (
                    <Button variant="outline" size="default" className="flex-1 font-medium" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
