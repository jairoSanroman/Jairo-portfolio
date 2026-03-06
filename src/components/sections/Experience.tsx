import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Operario de Limpieza",
    company: "ISS Facility Services",
    period: "Febrero 2026 – Actualidad",
    description: "Trabajo en el mantenimiento de instalaciones, cumpliendo con los estándares establecidos y coordinándome con diferentes equipos y turnos de trabajo.",
    type: "Laboral"
  },
  {
    role: "Soporte de Programación",
    company: "Absolute Branding Company",
    period: "Diciembre 2024",
    description: "Soporte técnico y apoyo en el mantenimiento de aplicaciones, ayudando en la resolución de incidencias y colaborando con el equipo de desarrollo en pequeñas mejoras.",
    type: "IT"
  },
  {
    role: "Prácticas DAM",
    company: "I+D3 Equipamientos Tecnológicos",
    period: "2023",
    description: "Desarrollo y mantenimiento de aplicaciones y bases de datos, apoyando tareas de programación y gestionando datos en entornos reales de cliente.",
    type: "IT"
  },
  {
    role: "Operario",
    company: "Grupo Stellantis",
    period: "2021",
    description: "Trabajo en entorno industrial bajo estrictos estándares de calidad, siguiendo procesos definidos y manteniendo un alto nivel de responsabilidad en línea de producción.",
    type: "Laboral"
  },
  {
    role: "Prácticas de Telecomunicaciones",
    company: "I+D3 Equipamientos Tecnológicos",
    period: "2018",
    description: "Instalación y mantenimiento de sistemas de telecomunicaciones, apoyando al equipo técnico en tareas de campo y configuración.",
    type: "IT"
  }
]

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-4 md:px-8 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Experiencia</h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-border ml-4 md:ml-0 md:left-1/2 md:-translate-x-px">
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-12 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto md:mr-0'} md:w-1/2`}>
              {/* Dot */}
              <div className="absolute top-0 left-[-9px] md:left-auto md:right-[-9px] z-10 w-4 h-4 bg-background border-2 border-primary rounded-full group">
                <div className={`absolute -inset-2 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform ${index % 2 === 0 ? 'md:-right-2' : ''}`}></div>
              </div>
              
              {index % 2 !== 0 && (
                <div className="hidden md:block absolute top-0 left-[-9px] z-10 w-4 h-4 bg-background border-2 border-primary rounded-full group"></div>
              )}

              <div className={`pl-8 md:pl-0 ${index % 2 !== 0 ? 'md:pl-12' : ''}`}>
                <div className={`inline-flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <Badge className={exp.type === 'IT' ? 'bg-primary/20 text-primary border-none' : 'bg-muted text-muted-foreground border-none'}>
                    {exp.type}
                  </Badge>
                  <span className="text-sm font-bold text-muted-foreground">{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-headline font-bold text-foreground mb-1">{exp.role}</h3>
                <h4 className="text-lg font-medium text-gradient-blue mb-3">{exp.company}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}