"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Server, Terminal } from "lucide-react";
import { Icon } from '@iconify/react';

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: [
      {
        icon: "devicon:react",
        name: "React",
        level: 80,
      },
      {
        icon: "devicon-plain:nextjs",
        name: "Next.js",
        level: 70,
      },
      {
        icon: "vscode-icons:file-type-vue",
        name: "Vue.js",
        level: 70,
      },
      {
        icon: "devicon:tailwindcss",
        name: "Tailwind CSS",
        level: 85,
      },
      {
        icon: "vscode-icons:file-type-typescript-official",
        name: "TypeScript",
        level: 75,
      },
      {
        icon: "devicon:javascript",
        name: "JavaScript",
        level: 85,
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      {
        icon: "devicon:spring",
        name: "Spring",
        level: 75,
      },
      {
        icon: "logos:dotnet",
        name: ".NET",
        level: 45,
      },
      {
        icon: "vscode-icons:file-type-node",
        name: "Node.js",
        level: 55,
      },
      {
        icon: "devicon:csharp",
        name: "C#",
        level: 55,
      },
      {
        icon: "devicon:java",
        name: "Java",
        level: 80,
      },
    ],
  },
  {
    id: "database",
    name: "Banco de Dados",
    icon: <Database className="h-5 w-5" />,
    skills: [
      {
        icon: "devicon:postgresql",
        name: "PostgreSQL",
        level: 85,
      },
      {
        icon: "devicon:mongodb",
        name: "MongoDB",
        level: 50,
      },
      {
        icon: "devicon:firebase",
        name: "Firebase",
        level: 55,
      },
      {
        icon: "devicon:mysql",
        name: "MySQL",
        level: 65,
      },
    ],
  },
  {
    id: "tools",
    name: "Ferramentas",
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      {
        icon: "devicon:git",
        name: "Git",
        level: 80,
      },
      {
        icon: "devicon:gitlab",
        name: "GitLab",
        level: 90,
      },
      {
        icon: "devicon:docker",
        name: "Docker",
        level: 55,
      },
      {
        icon: "simple-icons:keycloak",
        name: "Keycloak",
        level: 60,
      },
      {
        icon: "simple-icons:vercel",
        name: "Vercel",
        level: 80,
      },
      {
        icon: "simple-icons:railway",
        name: "Railway",
        level: 80,
      },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

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
            Minhas habilidades técnicas e experiência em diversas tecnologias e
            ferramentas.
          </p>
        </motion.div>

        <Tabs
          defaultValue="frontend"
          value={activeCategory}
          onValueChange={setActiveCategory}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 gap-8 bg-card">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-card-foreground data-[state=active]:text-card"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent
              className="flex justify-center"
              key={category.id}
              value={category.id}
            >
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
                        <CardTitle className="flex flex-row justify-start gap-2 text-lg">
                          <Icon
                              icon={skill.icon}
                              className="w-6 h-6"
                            />
                          {skill.name}
                        </CardTitle>
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
                        <p className="text-right text-sm text-muted-foreground mt-1">
                          {skill.level}%
                        </p>
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
  );
}
