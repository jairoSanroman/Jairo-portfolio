"use client"

import { useState, useEffect } from "react"
import { skillProjectConnector, type SkillProjectConnectorOutput } from "@/ai/flows/skill-project-connector"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, X, BrainCircuit, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  skill: string
  onClose: () => void
}

export function SkillProjectMatcher({ skill, onClose }: Props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<SkillProjectConnectorOutput | null>(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const result = await skillProjectConnector({ skill })
        setData(result)
      } catch (error) {
        console.error("Error matching projects:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [skill])

  return (
    <Card className="border-2 border-primary/50 bg-primary/5 relative overflow-hidden neon-glow-blue">
      <div className="absolute top-0 right-0 p-2">
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-primary/20">
          <X className="w-5 h-5" />
        </Button>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <CardTitle className="font-headline text-xl">Análisis de IA: {skill}</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-secondary" /> 
          Relacionando mis proyectos con esta competencia técnica...
        </p>
      </CardHeader>

      <CardContent className="pt-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-sm font-medium animate-pulse">Consultando mi experiencia técnica...</p>
          </div>
        ) : data && data.relevantProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {data.relevantProjects.map((project, idx) => (
              <div key={idx} className="bg-card/80 border border-primary/20 p-4 rounded-xl hover:border-primary/50 transition-all">
                <h4 className="font-bold text-primary mb-2">{project.name}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  "{project.explanation}"
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No se encontraron proyectos específicos con esta tecnología, pero estoy capacitado para aplicarla en futuros retos.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}