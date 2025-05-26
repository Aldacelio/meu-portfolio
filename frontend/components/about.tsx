"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  Briefcase,
  GraduationCap,
  Heart,
  Code,
  Terminal,
  Github,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada, experiência e paixões.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-card rounded-xl p-8 border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl animation-gradient to-transparent rounded-bl-full"></div>

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent animation-gradient inline-block">
                  Olá, sou o Aldacélio!
                </h3>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-card-foreground/10">
                    <Code className="mr-1 h-3 w-3" /> Desenvolvedor Júnior
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-card-foreground/10">
                    <Briefcase className="mr-1 h-3 w-3" /> 1 ano de experiência
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-card-foreground/10">
                    <Terminal className="mr-1 h-3 w-3" /> Aprendiz contínuo
                  </span>
                </div>

                <p className="mb-4 text-muted-foreground">
                  Sou um desenvolvedor full stack, com 1 ano de experiência como
                  estagiário, atuando no desenvolvimento de aplicações web.
                  Atualmente, estou trabalhando em meu primeiro projeto
                  profissional, onde tenho a oportunidade de aprender e evoluir
                  constantemente.
                </p>

                <p className="text-muted-foreground mb-6">
                  Minha paixão está em criar soluções digitais e explorar novas
                  tecnologias. Tenho me dedicado ao aprimoramento das minhas
                  habilidades em desenvolvimento web, com foco em React, Next.js
                  e Tailwind no front-end, além de Java com Spring Boot no
                  back-end. Acredito que a combinação de curiosidade, dedicação
                  e aprendizado contínuo são essenciais para crescer na carreira
                  e entregar soluções de qualidade.
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                    TECNOLOGIAS QUE ESTOU APRENDENDO
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-medium">
                      Git
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <a href="https://export-download.canva.com/v9nEw/DAGhhjv9nEw/37/0-424929723212114446.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250512%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250512T134007Z&X-Amz-Expires=90107&X-Amz-Signature=82c01c590217e930e889182c775fe60e4f0aba14c5dbaac23a031d475fe9ef9f&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Antonio%2520Aldac%25C3%25A9lio.pdf&response-expires=Tue%2C%2013%20May%202025%2014%3A41%3A54%20GMT" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card">	
                <TabsTrigger
                  value="experience"
                  className="flex items-center gap-2 data-[state=active]:bg-card-foreground data-[state=active]:text-card"
                >
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experiência</span>
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="flex items-center gap-2 data-[state=active]:bg-card-foreground data-[state=active]:text-card"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Educação</span>
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="flex items-center gap-2 data-[state=active]:bg-card-foreground data-[state=active]:text-card"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Interesses</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="mt-6">
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-6">
                    <div className="relative pl-8 pb-8 border-l border-slate-200 dark:border-slate-700">
                      <div className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 rounded-full bg-primary flex items-center justify-center">
                        <Briefcase className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">
                          Estagiário em Desenvolvimento
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Núcleo de práticas de informática• 2024 - Presente
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Atualmente trabalho como estagiário em um projeto em
                          andamento, onde tenho a oportunidade de aprender e
                          aplicar conhecimentos em desenvolvimento web Vue.js,
                          Java, PostgreSQL, entre outras tecnologias. Participo
                          de code reviews, implemento funcionalidades e colaboro
                          com a equipe de desenvolvimento.
                        </p>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6">
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 space-y-6">
                    <div className="relative pl-8 pb-8 border-l border-slate-200 dark:border-slate-700">
                      <div className="absolute top-0 left-0 w-6 h-6 -translate-x-1/2 rounded-full bg-primary flex items-center justify-center">
                        <GraduationCap className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold">
                          Bacharelado em Sistemas de informação
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Universidade Federal do Ceará • 2019 - Atualmente
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Cursando Sistemas de informação com foco em
                          desenvolvimento de software, algoritmos, estruturas de
                          dados e engenharia de software. Participação em
                          projetos acadêmicos e grupos de estudo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interests" className="mt-6">
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <Code className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                        <h4 className="font-medium">Desenvolvimento Web</h4>
                      </div>
                      <div className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <Terminal className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                        <h4 className="font-medium">Aprendizado Contínuo</h4>
                      </div>
                      <div className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <Github className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                        <h4 className="font-medium">Open Source</h4>
                      </div>
                      <div className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <GraduationCap className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                        <h4 className="font-medium">Novas Tecnologias</h4>
                      </div>
                      <div className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                        <Briefcase className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                        <h4 className="font-medium">Projetos Pessoais</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
