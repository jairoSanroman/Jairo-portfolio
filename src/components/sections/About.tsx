import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Target, Users2, Zap } from "lucide-react"

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Sobre Mí</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-6 text-lg leading-relaxed">
            <p>
              Soy Jairo Sanromán, desarrollador junior con base en <span className="text-primary font-semibold">Vigo, España</span>. Vengo de la FP de Desarrollo de Aplicaciones Multiplataforma y he trabajado tanto en entornos técnicos como industriales, lo que me ha dado una buena capacidad de adaptación, trabajo en equipo y atención al detalle.
            </p>
            <p>
              Me interesa crear soluciones útiles, seguir mejorando mis habilidades en <span className="text-secondary font-semibold">Java, JavaScript y frameworks modernos</span>, y participar en proyectos donde pueda aprender rápido y aportar desde el primer día.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <Users2 className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-headline font-bold text-sm">Trabajo en Equipo</h4>
                <p className="text-xs text-muted-foreground mt-1">Experiencia en entornos industriales colaborativos.</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-secondary/50 transition-colors">
                <Target className="w-6 h-6 text-secondary mb-2" />
                <h4 className="font-headline font-bold text-sm">Atención al Detalle</h4>
                <p className="text-xs text-muted-foreground mt-1">Rigurosidad en procesos técnicos y de calidad.</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <Zap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-headline font-bold text-sm">Adaptabilidad</h4>
                <p className="text-xs text-muted-foreground mt-1">Capacidad para aprender nuevos lenguajes rápido.</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border hover:border-secondary/50 transition-colors">
                <Code2 className="w-6 h-6 text-secondary mb-2" />
                <h4 className="font-headline font-bold text-sm">Aprendizaje Continuo</h4>
                <p className="text-xs text-muted-foreground mt-1">Formación constante en últimas tecnologías.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="overflow-hidden border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">🎓</span>
                  Formación
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary">Técnico Superior en DAM</h4>
                    <p className="text-sm">C.P.R. CEBEM (2021 – 2023)</p>
                    <p className="text-xs text-muted-foreground mt-1">Desarrollo de Aplicaciones Multiplataforma</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Instalaciones Telecomunicaciones</h4>
                    <p className="text-sm">C.R.P. Colegio San Miguel (2016 – 2018)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-lg font-headline font-bold mb-4">Certificaciones</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none">.NET 8 (2024)</Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none">Spring Boot (2024)</Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none">IA Generativa (2024)</Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none">Ciberseguridad (2025)</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}