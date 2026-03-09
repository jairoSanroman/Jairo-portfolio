
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const experiences = [
  {
    role: "Operario de Limpieza",
    company: "ISS Facility Services",
    period: "Febrero 2026 – Actualidad",
    description: "Trabajo en el mantenimiento de instalaciones bajo altos estándares de higiene y seguridad. Coordinación con equipos multidisciplinares en entornos de gran escala y cumplimiento riguroso de protocolos de desinfección.",
    type: "Laboral",
    imageId: "exp-iss"
  },
  {
    role: "Soporte de Programación",
    company: "Absolute Branding Company",
    period: "Diciembre 2024",
    description: "Soporte técnico y mantenimiento de aplicaciones. Resolución de incidencias en código y colaboración activa con el equipo de desarrollo senior en la optimización de procesos.",
    type: "IT",
    imageId: "exp-absolute"
  },
  {
    role: "Prácticas DAM",
    company: "I+D3 Equipamientos Tecnológicos",
    period: "2023",
    description: "Desarrollo de módulos funcionales y gestión de bases de datos relacionales. Aplicación de metodologías ágiles en el flujo de trabajo diario y pruebas de integración.",
    type: "IT",
    imageId: "exp-id3"
  },
  {
    role: "Operario",
    company: "Grupo Stellantis",
    period: "2021",
    description: "Trabajo en cadena de montaje automotriz bajo estrictos estándares de calidad internacional. Disciplina, eficiencia y trabajo bajo presión en procesos industriales críticos.",
    type: "Laboral",
    imageId: "exp-stellantis"
  }
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-4 md:px-8 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Experiencia Profesional</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Trayectoria versátil que combina formación técnica en desarrollo con experiencia práctica en sectores industriales de alta exigencia.
          </p>
        </div>

        <div className="grid gap-12">
          {experiences.map((exp, index) => {
            const img = PlaceHolderImages.find(i => i.id === exp.imageId)
            return (
              <div 
                key={index} 
                className="grid md:grid-cols-12 gap-8 items-stretch bg-card/40 border border-white/5 p-4 md:p-6 rounded-[2.5rem] hover:bg-card/60 hover:border-primary/20 transition-all duration-500 group shadow-2xl backdrop-blur-sm overflow-hidden"
              >
                <div className="md:col-span-5 relative h-64 md:h-auto rounded-3xl overflow-hidden bg-muted/20">
                  <Image 
                    src={img?.imageUrl || "https://picsum.photos/seed/experience/800/600"} 
                    alt={exp.company}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    data-ai-hint={img?.imageHint || "workplace image"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border-none shadow-2xl ${
                        exp.type === 'IT' ? 'bg-primary text-white' : 'bg-secondary text-background'
                      }`}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col justify-center p-2 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-[10px] font-bold text-muted-foreground px-4 py-1.5 rounded-full bg-white/5 border border-white/10 uppercase tracking-tighter whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-medium text-gradient-blue mb-6">
                    {exp.company}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
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
