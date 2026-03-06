'use server';
/**
 * @fileOverview A Genkit flow to identify and explain projects relevant to a given technical skill.
 *
 * - skillProjectConnector - A function that takes a technical skill and returns a list of relevant projects with explanations.
 * - SkillProjectConnectorInput - The input type for the skillProjectConnector function.
 * - SkillProjectConnectorOutput - The return type for the skillProjectConnector function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SkillProjectConnectorInputSchema = z.object({
  skill: z.string().describe("The technical skill to find relevant projects for."),
});
export type SkillProjectConnectorInput = z.infer<typeof SkillProjectConnectorInputSchema>;

const RelevantProjectOutputSchema = z.object({
  name: z.string().describe("The name of the relevant project."),
  explanation: z.string().describe("A brief explanation of why this project is relevant to the given skill, referencing its description and technologies."),
});

const SkillProjectConnectorOutputSchema = z.object({
  relevantProjects: z.array(RelevantProjectOutputSchema).describe("A list of projects relevant to the given technical skill."),
});
export type SkillProjectConnectorOutput = z.infer<typeof SkillProjectConnectorOutputSchema>;

// Internal schema for the prompt, including project data
const PromptInputSchema = z.object({
  skill: z.string().describe("The technical skill to find relevant projects for."),
  projects: z.array(z.object({
    name: z.string().describe("The name of the project."),
    description: z.string().describe("A brief description of the project."),
    technologies: z.string().describe("Technologies used in the project, separated by commas."),
  })).describe("A list of Jairo Sanromán's projects."),
});

const jairoProjects = [
  {
    name: 'Sistema de Gestión de Incidencias',
    description: 'Aplicación backend para gestionar incidencias internas (tickets), pensada para centralizar la creación, asignación y seguimiento de problemas dentro de una empresa. He desarrollado un sistema que permite registrar incidencias, asignarlas a usuarios y controlar su estado durante todo el ciclo de vida, siguiendo buenas prácticas de arquitectura, seguridad y mantenibilidad.',
    technologies: 'Java 17, Spring Boot 3, Spring Data JPA, PostgreSQL, JWT, Swagger, Docker, Spring Security'
  },
  {
    name: 'AI Job Hunt Assistant',
    description: 'Mini aplicación web que ayuda en la búsqueda de empleo usando IA, analizando ofertas y adaptando el CV y los mensajes al reclutador de forma automática. El usuario pega una oferta de trabajo y su CV, y la herramienta resume la oferta, extrae requisitos clave, propone mejoras del CV adaptadas al puesto y genera un mensaje corto y personalizado para contactar al reclutador por LinkedIn o email. Además, guarda un historial local de ofertas analizadas y mensajes generados.',
    technologies: 'Frontend con React y CSS (o CSS-in-JS) y Axios para las peticiones HTTP. Backend con Node.js y Express, configuración de CORS y consumo de la API de OpenAI (ChatGPT) para procesar texto y generar respuestas.'
  },
  {
    name: 'Pokémon Run Tracker (Lovable)',
    description: 'Aplicación web creada con la plataforma Lovable, enfocada en gestionar partidas y retos personalizados de Pokémon, permitiendo registrar equipos, rutas, eventos clave y reglas de cada run. El objetivo es disponer de un panel claro para seguir el progreso de la partida, controlar qué Pokémon están disponibles, cuáles han sido derrotados y aplicar reglas especiales de juego de forma visual y organizada.',
    technologies: 'Desarrollo low‑code con Lovable, integrando lógica personalizada en frontend y backend según las necesidades del tracker.'
  }
];

const skillProjectConnectorPrompt = ai.definePrompt({
  name: 'skillProjectConnectorPrompt',
  input: { schema: PromptInputSchema },
  output: { schema: SkillProjectConnectorOutputSchema },
  prompt: `Given the following technical skill and a list of Jairo Sanromán's projects, identify which projects are most relevant to the skill. For each relevant project, provide a brief explanation of *why* it is relevant, referencing the project's description and technologies. If no projects are relevant, return an empty array for 'relevantProjects'.

Skill: {{{skill}}}

Projects:
{{#each projects}}
Project Name: {{{this.name}}}
Description: {{{this.description}}}
Technologies: {{{this.technologies}}}
---
{{/each}}

Your output MUST be a JSON object conforming to the specified output schema. Always include the 'relevantProjects' array, even if empty.`,
});

const skillProjectConnectorFlow = ai.defineFlow(
  {
    name: 'skillProjectConnectorFlow',
    inputSchema: SkillProjectConnectorInputSchema,
    outputSchema: SkillProjectConnectorOutputSchema,
  },
  async (input) => {
    const promptInput = {
      skill: input.skill,
      projects: jairoProjects,
    };
    const { output } = await skillProjectConnectorPrompt(promptInput);
    return output!;
  }
);

export async function skillProjectConnector(input: SkillProjectConnectorInput): Promise<SkillProjectConnectorOutput> {
  return skillProjectConnectorFlow(input);
}
