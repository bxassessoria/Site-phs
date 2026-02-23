import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-16 mb-20 pb-20 border-b border-white/10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                <span className="text-white font-bold">PHS</span>
              </div>
              <span className="font-bold text-lg">PHS Incorporações</span>
            </div>
            <p className="text-white/70 text-base leading-relaxed font-light">
              Transformando espaços em marcas registradas de valor e autenticidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-8 text-base">Navegação</h4>
            <ul className="space-y-4 text-base">
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300 font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#empreendimentos" className="text-white/70 hover:text-secondary transition-colors duration-300 font-light">
                  Empreendimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-secondary transition-colors duration-300 font-light">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#processo" className="text-white/70 hover:text-secondary transition-colors duration-300 font-light">
                  Processo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-8 text-base">Contato</h4>
            <ul className="space-y-5 text-base">
              <li className="flex items-center gap-3 text-white/70">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="font-light">(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="font-light">contato@phs.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="font-light">Av. Prof. Arthur Fonseca, 555<br />Sorocaba, SP</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-8 text-base">Redes Sociais</h4>
            <div className="flex gap-6">
              <a
                href="https://instagram.com/phsincorporacoes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/phs-incorporacoes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-base text-white/60">
          <p className="font-light">
            &copy; {currentYear} PHS Incorporações. Todos os direitos reservados.
          </p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-secondary transition-colors duration-300 font-light">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-secondary transition-colors duration-300 font-light">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
