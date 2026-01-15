import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C#", "SQL", "JavaScript", "PHP", "HTML/CSS"],
    color: "border-l-primary",
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Laravel", "Angular", "React Native", "Unity"],
    color: "border-l-secondary",
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Azure", "Docker", "Power BI"],
    color: "border-l-accent",
  },
  {
    category: "Professional Skills",
    skills: ["Problem-Solving", "Teamwork", "Communication", "Time Management", "Active Listening"],
    color: "border-l-primary",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 50px)'}} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" style={{backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)'}} />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">My technical toolkit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-l-4 ${category.color} hover:-translate-y-1 bg-gradient-to-br from-card to-card/50`}
            >
              <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all cursor-default border-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
