import { Building2, MapPin, Zap } from 'lucide-react';

const differentials = [
  {
    icon: Building2,
    title: 'Qualidade Premium',
    description: 'Projetos desenvolvidos com inteligência técnica, foco estratégico e estética minimalista que resistem ao tempo.',
  },
  {
    icon: MapPin,
    title: 'Localizações Estratégicas',
    description: 'Escolhemos cada localização com cuidado para garantir valorização e acessibilidade aos nossos clientes.',
  },
  {
    icon: Zap,
    title: 'Inovação Constante',
    description: 'Incorporamos as melhores práticas e tecnologias para criar empreendimentos únicos e diferenciados.',
  },
];

export default function DifferentialsSection() {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container py-32">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-primary mb-8">Por que escolher a PHS</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            Somos movidos por uma visão: transformar espaços em marcas registradas de valor e autenticidade.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-12 bg-white border border-border hover:border-secondary hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Icon size={32} className="text-secondary group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-primary mb-6">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base font-light">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
