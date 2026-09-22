import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ChevronRight, Globe } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const projects = [
  {
    id: "project-incidencias",
    title: "Sistema de Gestión de Incidencias",
    description: "Aplicación robusta para la gestión de tickets corporativos. Backend securizado con JWT y documentación Swagger completa.",
    technologies: ["Java 17", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/jairoSanroman/incident-management-system",
    demo: "https://demo.com"
  },
  {
    id: "project-devlinks",
    title: "DevLinks",
    description: "Gestor de recursos para developers. Guarda, organiza y encuentra al instante tus links, docs y tutoriales favoritos con búsqueda en tiempo real.",
    technologies: ["React", "Node.js", "Express"],
    github: "https://github.com/jairoSanroman/DevLinks",
    demo: "https://demo.com"
  },
  {
    id: "project-pokemon",
    title: "Pokémon Run Tracker (Lovable)",
    description: "Plataforma para gestionar retos Nuzlocke de Pokémon con seguimiento visual de rutas, equipos y reglas personalizadas.",
    technologies: ["Lovable", "React", "Tailwind"],
    github: "https://github.com/jairoSanroman/poke-tracker",
    demo: "https://demo.com"
  }
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Proyectos Destacados</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Selección de mis trabajos más representativos integrando lógica compleja, bases de datos e Inteligencia Artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const img = PlaceHolderImages.find(i => i.id === project.id)
            return (
              <Card key={project.id} className="group overflow-hidden border-white/5 bg-card/50 flex flex-col hover:border-primary/40 hover:bg-card transition-all duration-500 shadow-2xl rounded-[2.5rem] backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden bg-muted/20">
                  <Image 
                    src={img?.imageUrl || "https://picsum.photos/seed/project/800/600"} 
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={img?.imageHint || "software interface"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 bg-background/80 backdrop-blur-md border border-white/10 hover:bg-primary hover:text-white transition-all shadow-xl">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 bg-background/80 backdrop-blur-md border border-white/10 hover:bg-primary hover:text-white transition-all shadow-xl">
                        <Globe className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
                
                <CardHeader className="p-8 pb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="text-[10px] py-0.5 px-3 border-white/10 bg-white/5 text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors uppercase font-bold tracking-tighter">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="font-headline text-2xl mb-3 group-hover:text-primary transition-colors tracking-tight">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="p-8 pt-0 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="link" className="p-0 text-primary hover:text-primary/80 group/btn h-auto font-bold uppercase text-xs tracking-widest">
                      Explorar proyecto <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
