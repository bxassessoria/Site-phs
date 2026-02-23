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

  const logoUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663310649313/LfkPyuoQhxASWcgW.png';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-20 md:h-24 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src={logoUrl}
            alt="IMPERIA Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center px-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-300 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex gap-2 ml-auto md:ml-0 flex-shrink-0">
          <a href="#contato" className="px-4 lg:px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm lg:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
            Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 transition-colors ml-auto flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 transition-all duration-300 mt-3 text-sm">
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
