import { Card } from "@/components/ui/card"

const experiences = [
  {
    role: "Customer Service Advisor",
    company: "BT Group",
    period: "Aug 2025 – Present",
    location: "Belfast",
    description:
      "Resolved complex billing and account issues, including bereavement support. Used internal systems (Cloud 9, Back Office) to manage and track customer inquiries efficiently.",
    technologies: ["Cloud 9", "Back Office", "Customer Support", "Problem Solving"],
  },
  {
    role: "Customer Service Advisor",
    company: "BT Group",
    period: "Jul 2024 – Feb 2025",
    location: "Belfast",
    description:
      "Resolved complex billing and account issues, including bereavement support. Used internal systems (Cloud 9, Back Office) to manage and track customer inquiries efficiently.",
    technologies: ["Cloud 9", "Back Office", "Customer Support", "Problem Solving"],
  },
  {
    role: "Customer Service Advisor",
    company: "First Source Solutions Ltd",
    period: "Jun 2022 – Oct 2022",
    location: "Belfast",
    description:
      "Handled payment arrangements and account support for customers. Maintained accurate customer data while ensuring compliance with data protection regulations.",
    technologies: ["Account Management", "Data Protection", "Customer Relations"],
  },
  {
    role: "Operator & Health & Safety Ambassador",
    company: "Amazon Logistics",
    period: "May 2022 – Jun 2022",
    location: "Belfast",
    description:
      "Managed trailer inventory via Yard Management System (YMS). Acted as Health & Safety Ambassador for yard operations, ensuring compliance and safety protocols.",
    technologies: ["YMS", "Logistics", "Health & Safety", "Operations"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Radial gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" style={{backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)'}} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-l-4 border-l-primary hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-muted-foreground">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-2 sm:mt-0">{exp.period}</p>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
              <p className="text-sm text-muted-foreground">{exp.technologies.join(" • ")}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
