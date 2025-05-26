"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "aldacelio368@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 98765-4321",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Quixadá, CE - Brasil",
      className: "pb-4",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aldacelio",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/antonio-aldac%C3%A9lio-a42a1212b/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/dudu.oli132",
      label: "Instagram",
    },
  ];

  const formFields = [
    {
      id: "name",
      label: "Nome",
      type: "text",
      placeholder: "Seu nome",
      colSpan: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "seu.email@exemplo.com",
      colSpan: true,
    },
    {
      id: "subject",
      label: "Assunto",
      type: "text",
      placeholder: "Assunto da mensagem",
      colSpan: false,
    },
    {
      id: "message",
      label: "Mensagem",
      type: "textarea",
      placeholder: "Sua mensagem...",
      rows: 5,
      colSpan: false,
    },
  ];

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const LoadingButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Enviando...
        </span>
      ) : (
        <span className="flex items-center">
          <Send className="mr-2 h-4 w-4" />
          Enviar Mensagem
        </span>
      )}
    </Button>
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget as HTMLFormElement;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Mensagem enviada!",
        description:
          "Obrigado pelo contato. Responderei o mais breve possível.",
        variant: "success",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description:
          "Ocorreu um erro ao tentar enviar sua mensagem. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar? Entre em contato comigo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Várias formas de entrar em contato comigo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 mt-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 ${
                      item.className || ""
                    }`}
                  >
                    <item.icon className="h-6 w-6 text-indigo-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="icon" asChild>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais
                  breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formFields.map((field) => (
                      <div
                        key={field.id}
                        className={`space-y-2 ${
                          !field.colSpan ? "md:col-span-2" : ""
                        }`}
                      >
                        <label
                          htmlFor={field.id}
                          className="text-sm font-medium"
                        >
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <Textarea
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            rows={field.rows}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleChange}
                            required
                          />
                        ) : (
                          <Input
                            id={field.id}
                            name={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <LoadingButton isSubmitting={isSubmitting} />
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
