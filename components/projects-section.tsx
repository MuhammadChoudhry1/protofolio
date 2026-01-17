"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink, Github } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

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
    title: "Color Palette Generator",
    description:
      "Advanced color palette generator with glassmorphism design, built entirely with Python's standard library. Features HSV-based color scheme generation, interactive swatches with clipboard integration, custom gradients, and animated notifications. Generates complementary, analogous, triadic, split complementary, and monochromatic color schemes with real-time preview.",
    technologies: ["Python", "Tkinter", "Colorsys", "HSV Color Manipulation", "GUI Design"],
    github: "https://github.com/MuhammadChoudhry1/colour-palette-generator",
    image: "/Screenshot 2026-01-15 085222.png",
  },
  {
    title: "Abafoteq Corporate Website",
    description:
      "Modern, responsive corporate website for Abafoteq Ltd to showcase services, projects, and company profile. Optimized for performance, usability, and cross-device compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://abafoteq.com/",
    image: "/Screenshot 2026-01-15 011041.png",
  },
  {
    title: "Professional Portfolio Website",
    description:
      "Modern, responsive portfolio website built with Next.js and TypeScript. Features smooth animations, dark mode support, and optimized performance. Showcases projects, skills, and professional experience with an elegant, accessible design.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/MuhammadChoudhry1/protofolio",
    image: "/Screenshot 2026-01-15 012325.png",
  },
]

export function ProjectsSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A showcase of my technical work and professional contributions</p>
        </div>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="overflow-hidden group bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full">
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
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="px-3 py-1 text-xs font-medium border-muted-foreground/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild className="hover:bg-primary hover:text-primary-foreground hover:border-primary">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button variant="default" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Site
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
