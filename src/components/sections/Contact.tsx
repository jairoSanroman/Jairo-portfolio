import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4">Contacto</h2>
          <div className="h-1.5 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-headline font-bold">¡Hablemos!</h3>
              <p className="text-muted-foreground text-lg">
                Si te interesa mi perfil o quieres saber más sobre mis proyectos, estaré encantado de hablar. Actualmente estoy buscando oportunidades para crecer profesionalmente.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Email</p>
                  <p className="text-lg font-medium">jaironmandvd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Teléfono</p>
                  <p className="text-lg font-medium">606 212 830</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground">Ubicación</p>
                  <p className="text-lg font-medium">Vigo, España</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-xl border-border hover:border-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl border-border hover:border-primary">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-3xl neon-glow-blue">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Nombre</label>
                  <Input placeholder="Tu nombre" className="rounded-xl bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email</label>
                  <Input type="email" placeholder="tu@email.com" className="rounded-xl bg-background border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Asunto</label>
                <Input placeholder="¿En qué puedo ayudarte?" className="rounded-xl bg-background border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Mensaje</label>
                <Textarea placeholder="Escribe tu mensaje aquí..." className="min-h-[150px] rounded-xl bg-background border-border" />
              </div>
              <Button size="lg" className="w-full rounded-xl bg-primary text-white gap-2 font-headline font-bold">
                Enviar Mensaje <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}