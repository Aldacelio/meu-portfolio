import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary/50 border-t">
      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <a href="https://github.com/Aldacelio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <a href="https://www.linkedin.com/in/antonio-aldac%C3%A9lio-a42a1212b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <a href="https://www.instagram.com/dudu.oli132/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground">
            © {new Date().getFullYear()} Aldacélio Cavalcante. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}