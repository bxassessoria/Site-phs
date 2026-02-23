import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="min-h-screen flex items-center justify-center bg-muted">
      <div className="container py-32">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-primary mb-8">Entre em Contato</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-light">
            Estamos prontos para ajudar você a encontrar o empreendimento perfeito. Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-16">
            {/* Phone */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 bg-secondary/10">
                  <Phone className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Telefone</h3>
                <p className="text-muted-foreground text-lg font-light">(11) 3000-0000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 bg-secondary/10">
                  <Mail className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Email</h3>
                <p className="text-muted-foreground text-lg font-light">contato@phs.com.br</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 bg-secondary/10">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Endereço</h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Av. Prof. Arthur Fonseca, 555<br />
                  Sala 502 - Ed. Elipse Tower<br />
                  Sorocaba, SP
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-border p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-3">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200 bg-white"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200 bg-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-3">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200 bg-white"
                  placeholder="(11) 9999-9999"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-3">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200 bg-white resize-none"
                  placeholder="Conte-nos mais sobre seu interesse..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Enviar Mensagem
              </button>

              <p className="text-xs text-muted-foreground text-center font-light">
                Responderemos em até 24 horas
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
