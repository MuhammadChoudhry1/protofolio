import { Card } from "@/components/ui/card"
import { GraduationCap, Code, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      
      {/* Mesh pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" style={{backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)'}} />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-l-4 border-l-primary group hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-muted-foreground leading-relaxed">
              BSc Computer Science from Ulster University with strong foundations in programming and data analysis
            </p>
          </Card>

          <Card className="p-8 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border-l-4 border-l-secondary group hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nearly 5 years of programming experience with Java, Python, SQL, and modern web technologies
            </p>
          </Card>

          <Card className="p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border-l-4 border-l-accent group hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Certification</h3>
            <p className="text-muted-foreground leading-relaxed">
              Uptrail Data Analyst Internship with expertise in EDA, SQL, Tableau, and AutoML
            </p>
          </Card>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-4xl">
          <p>
            I'm a recent Computer Science graduate passionate about software development, data analysis, and full-stack
            web applications. With nearly five years of hands-on programming experience, I bring a strong foundation in
            Java, Python, SQL, and web technologies to every project.
          </p>
          <p>
            Throughout my academic career at Ulster University and Belfast Metropolitan College, I've developed
            comprehensive skills in building real-world applications. From personal finance apps with machine learning
            to corporate websites and full-stack systems using Laravel, Angular, and React Native, I enjoy tackling
            diverse technical challenges.
          </p>
          <p>
            Known for effective communication, teamwork, and problem-solving skills gained through academic projects and
            professional experience in customer service roles at BT Group and Amazon. I'm always eager to learn new
            technologies and collaborate on impactful projects.
          </p>
        </div>
      </div>
    </section>
  )
}
