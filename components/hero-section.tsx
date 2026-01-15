import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Code2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-secondary/5 to-background" />
      
      {/* Mesh grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" style={{backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary) / 0.05) 1px, transparent 1px)'}} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 mb-4 shadow-lg shadow-primary/20 animate-in zoom-in duration-500">
            <Code2 className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Muhammad <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Choudhry</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-foreground/90 tracking-wide">Computer Science Graduate</p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about software development, data analysis, and full-stack web applications with nearly five years
            of hands-on programming experience.
          </p>

          <div className="flex items-center justify-center gap-4 pt-6">
            <Button variant="default" size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent border-2 hover:bg-primary/5 hover:scale-105 transition-all" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-3 pt-8">
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <a href="https://github.com/MuhammadChoudhry1" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <a href="https://www.linkedin.com/in/shehwar-choudhry-7528aa295/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 hover:bg-primary/10 hover:text-primary transition-colors"
              asChild
            >
              <a href="mailto:choudhrymuhammad73@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="pt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
