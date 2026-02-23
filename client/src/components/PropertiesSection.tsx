import { MapPin, Maximize2 } from 'lucide-react';

const properties = [
  {
    id: 1,
    name: 'Residencial Luxo - Sorocaba',
    location: 'Centro, Sorocaba - SP',
    price: 'A partir de R$ 850.000',
    status: 'Em Lançamento',
    specs: '156 - 264 m²',
    image: 'bg-gradient-to-br from-primary/15 to-secondary/15',
  },
  {
    id: 2,
    name: 'Empreendimento Corporativo',
    location: 'Zona Comercial, Sorocaba - SP',
    price: 'A partir de R$ 1.200.000',
    status: 'Em Desenvolvimento',
    specs: '180 - 350 m²',
    image: 'bg-gradient-to-br from-secondary/15 to-primary/15',
  },
  {
    id: 3,
    name: 'Residencial Premium',
    location: 'Bairro Nobre, Sorocaba - SP',
    price: 'A partir de R$ 950.000',
    status: 'Em Breve',
    specs: '149 - 221 m²',
    image: 'bg-gradient-to-br from-primary/12 to-secondary/12',
  },
  {
    id: 4,
    name: 'Empreendimento Misto',
    location: 'Região Estratégica, Sorocaba - SP',
    price: 'A partir de R$ 1.500.000',
    status: 'Em Planejamento',
    specs: '200 - 400 m²',
    image: 'bg-gradient-to-br from-secondary/12 to-primary/15',
  },
];

export default function PropertiesSection() {
  return (
    <section id="empreendimentos" className="min-h-screen flex items-center justify-center bg-muted">
      <div className="container py-32">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-primary mb-8">Nossos Empreendimentos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            Projetos cuidadosamente desenvolvidos com qualidade, inovação e atenção aos detalhes.
          </p>
        </div>

        {/* Properties Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-64 ${property.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6 bg-secondary text-white px-4 py-2 text-xs font-semibold">
                  {property.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-10">
                <h3 className="text-xl font-semibold text-primary mb-4">{property.name}</h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  <MapPin size={16} className="text-secondary" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-8 pb-8 border-t border-border text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <Maximize2 size={14} className="text-secondary" />
                    <span>{property.specs}</span>
                  </div>
                </div>

                <div className="mb-10">
                  <p className="text-secondary font-semibold text-lg">{property.price}</p>
                </div>

                <a 
                  href="#contato"
                  className="w-full block text-center px-6 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold transition-all duration-300"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-10 font-light text-lg">Quer conhecer mais sobre nossos projetos?</p>
          <a 
            href="#contato"
            className="inline-block px-10 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
