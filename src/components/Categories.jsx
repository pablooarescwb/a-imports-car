import React from 'react';
import { Cpu, Disc, Shield, Eye, Settings, HelpCircle, ArrowRight } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      icon: <Cpu size={24} className="text-brand-blue" />,
      name: "Motores & Cabeçotes",
      description: "Motores completos, parciais, cabeçotes, blocos e peças internas originais testadas.",
      query: "Motores e Cabeçotes"
    },
    {
      icon: <Settings size={24} className="text-brand-red" />,
      name: "Câmbios & Transmissão",
      description: "Caixas de marcha manuais e automáticas, semi-eixos, diferenciais e embreagens.",
      query: "Câmbios e Transmissão"
    },
    {
      icon: <Disc size={24} className="text-brand-green" />,
      name: "Suspensão & Freios",
      description: "Amortecedores, bandejas, pinças de freio, agregados, mangas de eixo e molas.",
      query: "Suspensão e Freios"
    },
    {
      icon: <Shield size={24} className="text-brand-blue" />,
      name: "Lataria & Carroceria",
      description: "Portas, capôs, para-choques, paralamas, retrovisores e tampas de porta-malas.",
      query: "Lataria e Carroceria"
    },
    {
      icon: <Eye size={24} className="text-brand-red" />,
      name: "Faróis & Lanternas",
      description: "Faróis originais halógenos e em LED, lanternas traseiras, milhas e setas.",
      query: "Faróis e Lanternas"
    },
    {
      icon: <HelpCircle size={24} className="text-brand-green" />,
      name: "Injeção & Elétrica",
      description: "Módulos de injeção, alternadores, motores de partida, sensores e painéis de instrumentos.",
      query: "Injeção e Elétrica"
    }
  ];

  const getWhatsAppLink = (categoryName) => {
    const baseMessage = `Olá! Gostaria de consultar a disponibilidade de peças na categoria de ${categoryName} que vi no site.`;
    return `https://wa.me/5516993379493?text=${encodeURIComponent(baseMessage)}`;
  };

  return (
    <section id="categorias" className="relative py-24 bg-brand-dark-gray border-t border-border-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-wider text-brand-red uppercase">Nosso Catálogo</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorias de Peças Disponíveis
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Trabalhamos com uma ampla variedade de componentes de mecânica, elétrica e lataria. Clique na categoria para consultar nosso estoque.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <a 
              key={idx}
              href={getWhatsAppLink(cat.query)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full bg-brand-dark border border-border-dark hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Card top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark-gray border border-border-dark flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <span className="text-xs text-gray-500 font-medium group-hover:text-white transition-colors duration-300">
                    Consultar Estoque
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-red uppercase tracking-wider mt-auto group-hover:text-white transition-colors duration-300">
                <span>Falar com especialista</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Catalog bottom CTA banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue/20 via-brand-dark/45 to-brand-red/10 border border-border-dark rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Não encontrou a peça que procurava?</h3>
            <p className="text-gray-400 text-sm max-w-xl">
              Nossa equipe faz uma busca direta no pátio físico e no sistema integrado para encontrar exatamente o que você precisa.
            </p>
          </div>
          <a
            href="https://wa.me/5516993379493?text=Ol%C3%A1!%20Procuro%20uma%20pe%C3%A7a%20espec%C3%ADfica%20e%20gostaria%20de%20saber%20se%20voc%C3%AAs%20t%C3%AAm%20no%20estoque."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand-red px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-red/90 shadow-lg shadow-brand-red/10 hover:scale-[1.02]"
          >
            <span>Perguntar ao Vendedor</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}