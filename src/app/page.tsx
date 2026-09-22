
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-12 px-4 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-headline font-bold text-gradient-blue mb-2">JS Portfolio</h2>
            <p className="text-sm text-muted-foreground" suppressHydrationWarning>
              © {new Date().getFullYear()} Jairo Sanromán. Desarrollado con Next.js & IA.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
            <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
