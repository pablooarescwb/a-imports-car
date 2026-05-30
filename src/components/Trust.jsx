import React from 'react';
import { ShieldCheck, Cpu, Truck, Check } from 'lucide-react';

export default function Trust() {
  const cards = [
    {
      icon: <ShieldCheck size={28} className="text-brand-blue" />,
      title: "Procedência Garantida",
      description: "Empresa credenciada pelo DETRAN. Todas as peças possuem Nota Fiscal Eletrônica (NFe), garantia de origem e baixa oficial registrada no sistema.",
      features: ["Credenciado DETRAN", "Nota Fiscal emitida na hora", "Baixa e procedência 100% legal"]
    },
    {
      icon: <Cpu size={28} className="text-brand-red" />,
      title: "Testes e Qualidade",
      description: "Antes de entrarem em nosso estoque, todas as peças passam por uma rigorosa triagem e testes mecânicos/elétricos feitos por nossa equipe técnica.",
      features: ["Testes de funcionamento", "Garantia de 90 dias", "Suporte pós-venda garantido"]
    },
    {
      icon: <Truck size={28} className="text-brand-green" />,
      title: "Entrega em Todo o Brasil",
      description: "Enviamos suas peças embaladas com total segurança por meio de transportadoras parceiras especializadas ou Correios, direto para sua oficina ou casa.",
      features: ["Envio com seguro de carga", "Código de rastreamento direto", "Embalagens reforçadas protetoras"]
    }
  ];

  return (
    <section id="diferenciais" className="relative py-24 bg-brand-dark border-t border-border-dark">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,31,91,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que comprar na <span className="text-brand-blue">A Imports Car</span>?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Combinamos a economia das peças usadas com a segurança, procedência e garantia que você precisa para rodar tranquilo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="flex flex-col h-full bg-brand-dark-gray border border-border-dark rounded-2xl p-8 hover:border-brand-blue/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-brand-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-border-dark">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-white mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 border-t border-border-dark pt-4 mt-auto">
                {card.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <Check size={14} className="text-brand-red flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}