
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const experiences = [
  {
    role: "Operario de Limpieza",
    company: "ISS Facility Services",
    period: "Febrero 2026 – Actualidad",
    description: "Trabajo en el mantenimiento de instalaciones, cumpliendo con los estándares establecidos y coordinándome con diferentes equipos y turnos de trabajo.",
    type: "Laboral",
    imageId: "exp-iss"
  },
  {
    role: "Soporte de Programación",
    company: "Absolute Branding Company",
    period: "Diciembre 2024",
    description: "Soporte técnico y apoyo en el mantenimiento de aplicaciones, ayudando en la resolución de incidencias y colaborando con el equipo de desarrollo.",
    type: "IT",
    imageId: "exp-absolute"
  },
  {
    role: "Prácticas DAM",
    company: "I+D3 Equipamientos Tecnológicos",
    period: "2023",
    description: "Desarrollo y mantenimiento de aplicaciones y bases de datos, apoyando tareas de programación y gestionando datos en entornos reales.",
    type: "IT",
    imageId: "exp-id3"
  },
  {
    role: "Operario",
    company: "Grupo Stellantis",
    period: "2021",
    description: "Trabajo en entorno industrial bajo estrictos estándares de calidad, siguiendo procesos definidos y manteniendo un alto nivel de responsabilidad.",
    type: "Laboral",
    imageId: "exp-stellantis"
  }
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-4 md:px-8 bg-muted/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Experiencia Profesional</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Trayectoria que combina formación técnica especializada con experiencia en entornos de alta exigencia.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const img = PlaceHolderImages.find(i => i.id === exp.imageId)
            return (
              <div 
                key={index} 
                className="grid md:grid-cols-12 gap-8 bg-card border border-border p-6 rounded-3xl hover:border-primary/30 transition-all duration-300 group shadow-sm overflow-hidden"
              >
                {/* Columna Izquierda: Imagen (40%) */}
                <div className="md:col-span-5 relative h-56 md:h-64 rounded-2xl overflow-hidden bg-muted">
                  <Image 
                    src={img?.imageUrl || "https://picsum.photos/seed/experience/400/300"} 
                    alt={exp.company}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    data-ai-hint={img?.imageHint || "workplace image"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      exp.type === 'IT' ? 'bg-primary text-white border-none' : 'bg-secondary text-background border-none'
                    }`}
                  >
                    {exp.type}
                  </Badge>
                </div>

                {/* Columna Derecha: Texto (60%) */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-bold text-muted-foreground px-3 py-1 rounded-full bg-muted border border-border/50">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-gradient-blue mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
