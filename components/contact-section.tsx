import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Multiple animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Radial dot pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '50px 50px'}} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{"Let's Connect"}</h2>
          <p className="text-xl text-muted-foreground">I'd love to hear from you</p>
        </div>
        <Card className="p-8 sm:p-12 shadow-2xl shadow-primary/10 border-2 bg-gradient-to-br from-card to-card/50">
          <div className="text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {
                "I'm always interested in hearing about new opportunities, collaborations, or just chatting about technology. Feel free to reach out!"
              }
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left py-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:choudhrymuhammad73@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    choudhrymuhammad73@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:07888270128" className="text-foreground hover:text-primary transition-colors">
                    07888 270128
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Belfast, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all" asChild>
                <a href="mailto:choudhrymuhammad73@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 hover:scale-105 transition-all" asChild>
                <a href="https://www.linkedin.com/in/shehwar-choudhry-7528aa295/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:bg-primary/5 hover:scale-105 transition-all" asChild>
                <a href="https://github.com/MuhammadChoudhry1" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </Card>
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2026 Muhammad Choudhry. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  )
}
