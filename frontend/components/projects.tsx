"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "D-Barber",
    description: "Plataforma de agendamentos de serviços de barbearia.",
    image: "/dBarber.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NeonDB", "Vercel"],
    demoUrl: "https://d-barber.vercel.app/",
    repoUrl: "https://github.com/Aldacelio/d-barber",
    category: "web",
  },
  {
    id: 2,
    title: "Landing Page Contrata+",
    description: "Uma landing page para coletar dados sobre um projeto de contratação de serviços.",
    image: "/contrata.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    demoUrl: "https://landing-page-contrata-frontend.vercel.app/",
    repoUrl: "https://github.com/Aldacelio/landing-page-contrata-frontend",
    category: "web",
  },
  {
    id: 3,
    title: "Figthers D",
    description: "Jogo de luta 2D. Onde criei para praticar animações e lógica de programação.",
    image: "/FightersD.png",
    tags: ["JavaScript", "Html", "CSS"],
    demoUrl: "https://aldacelio.github.io/Fighters-D/Pages/game.html",
    repoUrl: "https://github.com/Aldacelio/Fighters-D",
    category: "web",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-primary/80">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus projetos mais recentes e relevantes.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <div className="flex justify-center">
            <TabsList className="bg-card">
              <TabsTrigger value="all" className="data-[state=active]:bg-card-foreground data-[state=active]:text-card">Todos</TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-card-foreground data-[state=active]:text-card">Web</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Aldacelio" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

