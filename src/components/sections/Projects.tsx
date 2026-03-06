import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const projects = [
  {
    id: "project-incidencias",
    title: "Sistema de Gestión de Incidencias",
    description: "Aplicación backend para gestionar tickets internos, enfocada en la centralización, asignación y seguimiento de incidencias.",
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "JWT", "Swagger"],
    role: [
      "API REST segura con JWT.",
      "Entidades JPA y Postgres.",
      "Documentación técnica."
    ]
  },
  {
    id: "project-ai-job",
    title: "AI Job Hunt Assistant",
    description: "Herramienta web impulsada por IA que analiza ofertas laborales y personaliza CVs y mensajes para reclutadores de forma automática.",
    technologies: ["React", "Node.js", "Express", "OpenAI API", "Axios"],
    role: [
      "Integración con GPT de OpenAI.",
      "Backend en Node/Express.",
      "Diseño de UI funcional."
    ]
  },
  {
    id: "project-pokemon",
    title: "Pokémon Run Tracker (Lovable)",
    description: "Plataforma para gestionar partidas personalizadas de Pokémon (retos Nuzlocke) con seguimiento visual de rutas y equipos.",
    technologies: ["Lovable", "React", "State Management", "UX Design"],
    role: [
      "Lógica de gestión de rutas.",
      "Prototipado rápido en Lovable.",
      "Interfaz gamificada."
    ]
  }
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Proyectos Destacados</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Una selección de mis trabajos más recientes donde aplico lógica de programación, IA y diseño de experiencia de usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const img = PlaceHolderImages.find(i => i.id === project.id)
            return (
              <Card key={project.id} className="group overflow-hidden border-border bg-card flex flex-col hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="relative h-56 overflow-hidden bg-muted">
                  <Image 
                    src={img?.imageUrl || "https://picsum.photos/seed/project/800/600"} 
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={img?.imageHint || "software interface"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 bg-background/50 backdrop-blur-sm border-none hover:bg-primary hover:text-white transition-all">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 bg-background/50 backdrop-blur-sm border-none hover:bg-primary hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="p-6 pb-2">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" className="text-[10px] py-0 border-primary/20 bg-primary/5 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-2 flex-grow">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Contribución clave:</p>
                    <ul className="text-xs space-y-1.5 text-muted-foreground">
                      {project.role.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto border-t border-border/50 bg-muted/5">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80 group/btn h-auto mt-4">
                    Explorar detalles <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}