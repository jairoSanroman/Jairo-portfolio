import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const profileImg = PlaceHolderImages.find(img => img.id === "profile")
  const profileUrl = "https://i.ibb.co/S7rCQqbt/profile.jpg"

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-4 md:px-8 overflow-hidden bg-grid">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest">
            Disponible para trabajar
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 tracking-tighter">
            Jairo Sanromán
          </h1>
          
          <h2 className="text-xl md:text-2xl font-headline font-medium text-gradient-blue mb-6">
            Desarrollador Multiplataforma (Junior)
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
            Apasionado por las nuevas tecnologías, con formación sólida en DAM y un enfoque en soluciones eficientes y escalables.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 neon-glow-blue h-12 px-8">
              Contactar <Mail className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:border-primary/50 gap-2 h-12 px-8 bg-white/5 backdrop-blur-sm">
              Ver CV <FileText className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/jairo-sanromán-497746279/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] rounded-full p-2 bg-gradient-to-tr from-primary/40 to-secondary/40">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background/50 bg-card shadow-2xl relative group">
                <Image 
                  src={profileUrl} 
                  alt="Jairo Sanromán"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
            </div>
            
            <div className="absolute -bottom-2 -right-4 bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl neon-glow-blue transform rotate-3">
              <p className="text-sm font-bold text-gradient-blue">Vigo, España 🇪🇸</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <ArrowRight className="w-6 h-6 rotate-90" />
      </div>
    </section>
  )
}
