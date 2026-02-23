import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import PropertiesSection from '@/components/PropertiesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * PHS Incorporações - Home Page
 * 
 * Design Philosophy (Identidade Visual Original PHS):
 * - Paleta: Cinza Escuro (#3A3A3A), Branco (#FFFFFF), Vermelho (#D32F2F)
 * - Tipografia: Sem-serifa moderna e limpa
 * - Layout: Minimalista, elegante, profissional
 * - Calculadora integrada na hero section (padrão internet banking)
 * - Grid 2x2 para empreendimentos
 * - Processo em 4 passos
 * - Design responsivo mobile-first
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <HeroSection />
        <DifferentialsSection />
        <PropertiesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
