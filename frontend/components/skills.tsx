"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server, Terminal } from "lucide-react"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 70 },
      { name: "Vue.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Spring", level: 75 },
      { name: ".NET", level: 45 },
      { name: "Node.js", level: 55 },
      { name: "C#", level: 55 },
      { name: "Java", level: 80 },
    ],
  },
  {
    id: "database",
    name: "Banco de Dados",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 50 },
      { name: "Firebase", level: 55 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    id: "tools",
    name: "Ferramentas",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: "Git", level: 80 },
      { name: "GitLab", level: 90 },
      { name: "Docker", level: 55 },
      { name: "Keycloak", level: 60 },
      { name: "Vercel", level: 80 },
      { name: "Railway", level: 80 },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conhecimentos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minhas habilidades técnicas e experiência em diversas tecnologias e ferramentas.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" value={activeCategory} onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 gap-8 bg-card">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 data-[state=active]:bg-card-foreground data-[state=active]:text-card">
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}   
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent className="flex justify-center" key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%] ">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                      </CardHeader>
                      <CardContent>              
                        <div className="w-full bg-secondary/20 rounded-full h-2.5">
                          <motion.div
                            className="animation-gradient h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                        <p className="text-right text-sm text-muted-foreground mt-1">{skill.level}%</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}