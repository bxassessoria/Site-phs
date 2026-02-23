import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'EMPREENDIMENTOS', href: '#empreendimentos' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'PROCESSO', href: '#processo' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/40">
      <div className="container flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg className="h-12 w-auto" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* PHS Logo - Geometric Design */}
            {/* P */}
            <rect x="20" y="30" width="20" height="60" fill="#3A3A3A"/>
            <rect x="40" y="30" width="35" height="20" fill="#3A3A3A"/>
            <rect x="40" y="50" width="20" height="10" fill="#3A3A3A"/>
            <rect x="20" y="60" width="40" height="10" fill="#3A3A3A"/>
            
            {/* H */}
            <rect x="90" y="30" width="20" height="60" fill="#3A3A3A"/>
            <rect x="110" y="55" width="20" height="10" fill="#3A3A3A"/>
            <rect x="130" y="30" width="20" height="60" fill="#3A3A3A"/>
            
            {/* S */}
            <rect x="160" y="30" width="35" height="15" fill="#3A3A3A"/>
            <rect x="160" y="45" width="35" height="15" fill="#3A3A3A"/>
            <rect x="160" y="60" width="35" height="30" fill="#3A3A3A"/>
            
            {/* Red Square */}
            <rect x="175" y="75" width="15" height="15" fill="#D32F2F"/>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex gap-2 ml-auto md:ml-0">
          <a href="#contato" className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted transition-colors ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="container py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" className="block w-full text-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 transition-all duration-300 mt-4">
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
