import { FileText, Home, Handshake, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Análise',
    description: 'Avaliamos suas necessidades e apresentamos as melhores opções.',
  },
  {
    number: 2,
    icon: Home,
    title: 'Visita',
    description: 'Você conhece o empreendimento e visualiza o projeto.',
  },
  {
    number: 3,
    icon: Handshake,
    title: 'Negociação',
    description: 'Discutimos as melhores condições e preparamos a documentação.',
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: 'Entrega',
    description: 'Você recebe seu imóvel pronto para viver.',
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container py-32">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-primary mb-8">Como Funciona</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            Um processo simples, transparente e focado em sua satisfação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-10 relative mb-20">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-px bg-border"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Circle */}
                <div className="flex justify-center mb-10">
                  <div className="relative z-10 w-20 h-20 bg-secondary flex items-center justify-center border-4 border-white shadow-md">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {step.number}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="pt-24 border-t border-border">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <p className="text-5xl font-bold text-secondary mb-4">15+</p>
              <p className="text-muted-foreground font-light text-lg">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-4">500+</p>
              <p className="text-muted-foreground font-light text-lg">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-4">20+</p>
              <p className="text-muted-foreground font-light text-lg">Empreendimentos Entregues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
