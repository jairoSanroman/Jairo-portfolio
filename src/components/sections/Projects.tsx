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
    description: "Aplicación backend para gestionar incidencias internas (tickets), pensada para centralizar la creación, asignación y seguimiento de problemas.",
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "JWT", "Swagger", "Docker"],
    role: [
      "Diseño del modelo de datos y entidades JPA.",
      "Implementación de API REST segura.",
      "Documentación con Swagger.",
      "Contenerización con Docker."
    ]
  },
  {
    id: "project-ai-job",
    title: "AI Job Hunt Assistant",
    description: "Aplicación web que utiliza IA para analizar ofertas y adaptar CVs y mensajes al reclutador de forma automática.",
    technologies: ["React", "Node.js", "Express", "OpenAI API", "Axios"],
    role: [
      "Diseño de interfaz en React.",
      "Implementación de backend en Node/Express.",
      "Integración con API de OpenAI.",
      "Desarrollo de sistema de historial local."
    ]
  },
  {
    id: "project-pokemon",
    title: "Pokémon Run Tracker (Lovable)",
    description: "Plataforma enfocada en gestionar partidas y retos personalizados de Pokémon (Nuzlocke, etc.) de forma visual y organizada.",
    technologies: ["Lovable", "React", "Frontend Logic", "UX Design"],
    role: [
      "Diseño de estructura y navegación.",
      "Lógica de gestión de estados y rutas.",
      "Iteración continua sobre UI/UX."
    ]
  }
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Proyectos</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const img = PlaceHolderImages.find(i => i.id === project.id)
            return (
              <Card key={project.id} className="group overflow-hidden border-border bg-card flex flex-col hover:border-primary/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={img?.imageUrl || "https://picsum.photos/seed/project/800/600"} 
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    data-ai-hint={img?.imageHint || "software interface"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                      <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full w-8 h-8">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="p-6 pb-2">
                  <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0 flex-grow">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map(tech => (
                      <Badge key={tech} variant="outline" className="text-[10px] py-0 border-border text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-[10px] py-0 border-border text-muted-foreground">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">Mi Rol:</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      {project.role.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <ChevronRight className="w-3 h-3 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80 group/btn">
                    Ver detalles del proyecto <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
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