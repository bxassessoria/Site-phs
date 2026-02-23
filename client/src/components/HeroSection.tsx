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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
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
      <div className="relative z-10 w-full h-full flex items-center py-8 md:py-0">
        <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 h-full items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              <span className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider">
                Incorporadora Premium
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Sólida como
                <br />
                <span className="text-red-600">estrutura.</span>
                <br />
                Exclusiva como
                <br />
                <span className="text-red-600">assinatura.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-md leading-relaxed font-light">
              Entregamos conceito, propósito e sofisticação em cada empreendimento.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 lg:pt-8">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 md:mb-2">15+</div>
                <p className="text-xs md:text-sm text-white/70">Empreendimentos</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 md:mb-2">5k+</div>
                <p className="text-xs md:text-sm text-white/70">Clientes Satisfeitos</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 mb-1 md:mb-2">20+</div>
                <p className="text-xs md:text-sm text-white/70">Anos de Experiência</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 lg:pt-8">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium w-full sm:w-auto">
                Conheça a PHS
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-medium w-full sm:w-auto"
              >
                Fale com um Especialista
              </Button>
            </div>
          </div>

          {/* Right Side - Calculator Card (Visible on all screens) */}
          <div className="flex items-center justify-center w-full">
            <Card className="w-full max-w-md p-6 md:p-8 lg:p-10 bg-white shadow-2xl border-0 rounded-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10">Simule seu Financiamento</h3>

              <div className="space-y-5 md:space-y-6 lg:space-y-8">
                {/* Property Value */}
                <div>
                  <label className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3 block">
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
                  <label className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3 block">
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
                  <label className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3 block">
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
                  <label className="text-xs md:text-sm font-semibold text-gray-900 mb-2 md:mb-3 block">
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
                <div className="border-t border-gray-200 pt-5 md:pt-6 lg:pt-8 space-y-3 md:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-gray-600">Valor Financiado:</span>
                    <span className="font-semibold text-gray-900 text-xs md:text-sm">
                      R$ {loanAmount.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-gray-600">Parcela Mensal:</span>
                    <span className="text-sm md:text-base lg:text-lg font-bold text-red-600">
                      R$ {monthlyPayment.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs md:text-sm text-gray-600">Juros Totais:</span>
                    <span className="font-semibold text-gray-900 text-xs md:text-sm">
                      R$ {totalInterest.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 md:py-5 lg:py-6 font-semibold text-xs md:text-sm lg:text-base">
                  Solicitar Proposta
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
      </div>
    </section>
  );
}
