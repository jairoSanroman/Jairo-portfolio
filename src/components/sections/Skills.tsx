"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { SkillProjectMatcher } from "@/components/SkillProjectMatcher"
import { Code, Database, Layout, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Lenguajes",
    icon: <Code className="w-5 h-5 text-primary" />,
    skills: ["Java", "JavaScript", "Python", "C++"]
  },
  {
    title: "Frameworks y librerías",
    icon: <Layout className="w-5 h-5 text-secondary" />,
    skills: ["Spring Boot", "React", "Angular"]
  },
  {
    title: "Bases de datos",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["PL/SQL", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Herramientas",
    icon: <Settings className="w-5 h-5 text-secondary" />,
    skills: ["Git", "GitHub", "QML", "Docker", "JWT", "Swagger"]
  }
]

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <section id="habilidades" className="py-24 px-4 md:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Competencias Técnicas</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Haz clic en una habilidad para ver cómo la he aplicado en mis proyectos reales mediante Inteligencia Artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-headline font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(skill)}
                    className={`px-3 py-1 text-sm font-medium rounded-full border transition-all ${
                      selectedSkill === skill 
                        ? 'bg-primary border-primary text-white scale-105 shadow-lg shadow-primary/20' 
                        : 'bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedSkill && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <SkillProjectMatcher skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
          </div>
        )}
      </div>
    </section>
  )
}