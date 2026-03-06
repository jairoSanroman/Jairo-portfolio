import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile")

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-4 md:px-8 overflow-hidden bg-grid">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-500">
            Disponible para trabajar
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            Jairo Sanromán
          </h1>
          
          <h2 className="text-xl md:text-2xl font-headline font-medium text-gradient-blue mb-6 animate-in fade-in slide-in-from-bottom-8 duration-900">
            Desarrollador de aplicaciones multiplataforma (Junior)
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Soy un desarrollador apasionado por las nuevas tecnologías, con formación en Desarrollo de Aplicaciones Multiplataforma y un enfoque claro en el aprendizaje continuo y la adaptación a distintos lenguajes y entornos de programación.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 neon-glow-blue">
              Contactar <Mail className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-muted-foreground/20 hover:border-primary/50 gap-2">
              Ver CV <FileText className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-6 mt-10 animate-in fade-in duration-1000 delay-500">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-in fade-in zoom-in duration-1000">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border/50 bg-card">
              <Image 
                src={profileImg?.imageUrl || "https://picsum.photos/seed/jairo/600/600"} 
                alt="Jairo Sanromán"
                width={600}
                height={600}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="professional man portrait"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-card border border-border rounded-xl flex flex-col items-center justify-center p-2 shadow-xl animate-bounce">
              <span className="text-xs font-bold text-muted-foreground">Vigo</span>
              <span className="text-sm font-bold text-gradient-green">España</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowRight className="w-6 h-6 rotate-90" />
      </div>
    </section>
  )
}