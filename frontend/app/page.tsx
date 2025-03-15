export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
          Aldacélio Cavalcante
        </h1>
        
        <p className="text-xl text-foreground">
          Desenvolvedor Full Stack
        </p>
        
        <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao meu Portfolio</h2>
          <p className="text-muted-foreground">
            Este site está configurado com suporte a tema claro e escuro.
            Experimente alternar o tema usando o botão no canto superior direito.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <div className="p-4 bg-primary text-primary-foreground rounded-md">Primary</div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded-md">Secondary</div>
          <div className="p-4 bg-accent text-accent-foreground rounded-md">Accent</div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <div className="p-4 bg-muted text-muted-foreground rounded-md">Muted</div>
          <div className="p-4 bg-destructive text-destructive-foreground rounded-md">Destructive</div>
        </div>
      </div>
    </div>
  )
}