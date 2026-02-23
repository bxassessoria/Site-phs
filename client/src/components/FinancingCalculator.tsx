import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Percent, Calendar } from 'lucide-react';

export default function FinancingCalculator() {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(0.8);
  const [months, setMonths] = useState(360);

  const downPaymentPercentage = ((downPayment / propertyValue) * 100).toFixed(1);

  const calculations = useMemo(() => {
    const loanAmount = propertyValue - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    
    if (monthlyRate === 0) {
      const monthlyPayment = loanAmount / months;
      return {
        loanAmount,
        monthlyPayment,
        totalPaid: monthlyPayment * months,
        totalInterest: 0,
      };
    }

    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - loanAmount;

    return {
      loanAmount,
      monthlyPayment,
      totalPaid,
      totalInterest,
    };
  }, [propertyValue, downPayment, interestRate, months]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary mb-4">Simulador de Financiamento</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule as parcelas do seu financiamento imobiliário com base nos valores que você deseja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            {/* Property Value */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                <DollarSign size={18} />
                Valor do Imóvel
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="50000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>R$ 100 mil</span>
                  <span>R$ 5 milhões</span>
                </div>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <p className="text-lg font-semibold text-primary">{formatCurrency(propertyValue)}</p>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                <DollarSign size={18} />
                Entrada ({downPaymentPercentage}%)
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max={propertyValue}
                  step="10000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <p className="text-lg font-semibold text-secondary">{formatCurrency(downPayment)}</p>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                <Percent size={18} />
                Taxa de Juros (a.m.)
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>2%</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <p className="text-lg font-semibold text-primary">{interestRate.toFixed(2)}%</p>
              </div>
            </div>

            {/* Months */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                <Calendar size={18} />
                Prazo (meses)
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="12"
                  max="360"
                  step="12"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 ano</span>
                  <span>30 anos</span>
                </div>
                <input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <p className="text-lg font-semibold text-primary">
                  {Math.floor(months / 12)} anos {months % 12} meses
                </p>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <Card className="p-8 bg-white border-2 border-secondary/20 sticky top-24">
              <h3 className="text-2xl font-bold text-primary mb-8">Resultado da Simulação</h3>

              <div className="space-y-6">
                {/* Loan Amount */}
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Valor a Financiar</p>
                  <p className="text-3xl font-bold text-secondary">
                    {formatCurrency(calculations.loanAmount)}
                  </p>
                </div>

                {/* Monthly Payment */}
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Parcela Mensal</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(calculations.monthlyPayment)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {months} parcelas de {formatCurrency(calculations.monthlyPayment)}
                  </p>
                </div>

                {/* Total Interest */}
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Total de Juros</p>
                  <p className="text-2xl font-bold text-accent">
                    {formatCurrency(calculations.totalInterest)}
                  </p>
                </div>

                {/* Total Amount */}
                <div className="pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Valor Total a Pagar</p>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(calculations.totalPaid + downPayment)}
                  </p>
                </div>

                {/* CTA */}
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 rounded-lg">
                  Fale com um Especialista
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  *Simulação aproximada. Valores podem variar conforme instituição financeira.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
