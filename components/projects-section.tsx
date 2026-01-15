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
    github: "#",
    image: "/analytics-dashboard-charts.jpg",
  },
  {
    title: "Abafoteq Corporate Website",
    description:
      "Modern, responsive corporate website for Abafoteq Ltd to showcase services, projects, and company profile. Optimized for performance, usability, and cross-device compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "#",
    link: "https://abafoteq.com/",
    image: "/modern-ecommerce-web-dashboard.jpg",
  },
  {
    title: "Laravel Vacancies Web App",
    description:
      "Full-stack web application for managing job vacancies with user authentication, CRUD operations, and database integration using Laravel framework and SQL.",
    technologies: ["Laravel", "PHP", "SQL", "Bootstrap"],
    github: "#",
    image: "/task-management-kanban.jpg",
  },
  {
    title: "Angular Single-Page Application",
    description:
      "Modern single-page application built with Angular framework and MongoDB for data storage. Features dynamic routing and reactive forms for optimal user experience.",
    technologies: ["Angular", "TypeScript", "MongoDB", "REST API"],
    github: "#",
    image: "/algorithm-visualization-graph.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px'}} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group border-2 hover:border-primary/50 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {"link" in project && (
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
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
