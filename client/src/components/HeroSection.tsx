import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const heroBackgroundImage = 'https://private-us-east-1.manuscdn.com/sessionFile/4PM0HTUhSesOQKhCb4UCla/sandbox/tw527v6NFdoGq88UgLakpi-img-1_1771597795000_na1fn_aGVyby1iZy1wcmVtaXVt.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNFBNMEhUVWhTZXNPUUtoQ2I0VUNsYS9zYW5kYm94L3R3NTI3djZORmRvR3E4OFVnTGFrcGktaW1nLTFfMTc3MTU5Nzc5NTAwMF9uYTFmbl9hR1Z5YnkxaVp5MXdjbVZ0YVhWdC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RKqvmPiTzm~bqylTSu~dqM~sU9--yN6uYDrvBIy9UnGk~jjHyKPbMZb109tOPN4a5lXk~tH1FAuP7WhRBUT39IKOK~uhNjhFNxcOtQy3DkI5rOCIPB8FADv29dM2BwR4aBrVyJ0Sl~U70QZ9rLEomlSi6-8gnWVXDQ1UzE4OgdYxVx8aRkcUaqKH4yHos9Gu8MacoVMVrTrze~iXoZDIsypuTJgXrT0dX3O6AOlpgFTIOd1pdt3-IT~deA-V72FCdKwQMh733TFKjOfInuZWX1UBcx-8axjF6l1JReXATje4yY2GDdoU7OHEFa34WW6BiWcNtdVK~87mU2gph-doVA__';

export default function HeroSection() {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(360);

  // Calculate financing
  const loanAmount = propertyValue - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) /
    (Math.pow(1 + monthlyRate, loanTerm) - 1);
  const totalInterest = monthlyPayment * loanTerm - loanAmount;

  const downPaymentPercent = ((downPayment / propertyValue) * 100).toFixed(1);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{
        backgroundImage: `url('${heroBackgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay - Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                Incorporadora Premium
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Sólida como
                <br />
                <span className="text-secondary">estrutura.</span>
                <br />
                Exclusiva como
                <br />
                <span className="text-secondary">assinatura.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-white/80 max-w-md leading-relaxed font-light">
              Entregamos conceito, propósito e sofisticação em cada empreendimento.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <p className="text-sm text-white/70">Empreendimentos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">5k+</div>
                <p className="text-sm text-white/70">Clientes Satisfeitos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                <p className="text-sm text-white/70">Anos de Experiência</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-8">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-base font-medium">
                Conheça a PHS
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
              >
                Fale com um Especialista
              </Button>
            </div>
          </div>

          {/* Right Side - Calculator Card */}
          <div className="h-full flex items-center justify-center">
            <Card className="w-full max-w-md p-12 bg-white shadow-2xl border-0 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-10">Simule seu Financiamento</h3>

              <div className="space-y-8">
                {/* Property Value */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-4 block">
                    Valor do Imóvel: R$ {propertyValue.toLocaleString('pt-BR')}
                  </label>
                  <Slider
                    value={[propertyValue]}
                    onValueChange={(value) => setPropertyValue(value[0])}
                    min={100000}
                    max={2000000}
                    step={50000}
                    className="w-full"
                  />
                </div>

                {/* Down Payment */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-4 block">
                    Entrada ({downPaymentPercent}%): R$ {downPayment.toLocaleString('pt-BR')}
                  </label>
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    min={0}
                    max={propertyValue}
                    step={10000}
                    className="w-full"
                  />
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-4 block">
                    Taxa de Juros (a.m.): {interestRate.toFixed(2)}%
                  </label>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    min={3}
                    max={15}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* Loan Term */}
                <div>
                  <label className="text-sm font-semibold text-primary mb-4 block">
                    Prazo (meses): {loanTerm}
                  </label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    min={60}
                    max={480}
                    step={12}
                    className="w-full"
                  />
                </div>

                {/* Results */}
                <div className="border-t border-border pt-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Valor Financiado:</span>
                    <span className="font-semibold text-primary">
                      R$ {loanAmount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Parcela Mensal:</span>
                    <span className="text-lg font-bold text-secondary">
                      R$ {monthlyPayment.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Juros Totais:</span>
                    <span className="font-semibold text-primary">
                      R$ {totalInterest.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 font-semibold">
                  Solicitar Proposta
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
}
