import React from 'react';
import { ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-brand-red/5 blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <ShieldCheck size={16} className="text-brand-blue" />
              <span className="text-xs font-semibold tracking-wider text-brand-blue uppercase">
                Credenciado pelo DETRAN
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Peças Automotivas <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-blue">Originais</span> Usadas com <span className="text-brand-red">Garantia</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Encontre peças de procedência garantida para veículos nacionais e importados. Economize com segurança e receba no conforto da sua oficina ou residência em todo o Brasil.
            </p>

            {/* Bullets */}
            <ul className="space-y-3">
              {[
                "Peças testadas e com garantia de funcionamento",
                "Nota fiscal eletrônica e baixa oficial",
                "Suporte técnico especializado para achar a peça ideal"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={18} className="text-brand-red flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/5516993379493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-brand-red px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-brand-red/90 hover:scale-[1.02] shadow-xl shadow-brand-red/35"
              >
                {/* Official WhatsApp logo inside button */}
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.115.957 11.5 1.046c-5.437 0-9.862 4.371-9.866 9.8-.001 1.762.483 3.483 1.4 5.006L2.01 21.84l6.19-1.61c-.55.33-.94.57-1.55.92z"/>
                </svg>
                <span>Consultar Disponibilidade</span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#categorias"
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-dark-gray border border-border-dark px-8 py-4 text-base font-bold text-gray-300 transition-all duration-300 hover:bg-border-dark hover:text-white"
              >
                Ver Categorias
              </a>
            </div>
          </div>

          {/* Right SVG Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-red/10 rounded-full blur-3xl opacity-60"></div>
            
            {/* High-quality styled inline SVG of an engine/auto parts gear concept */}
            <svg 
              className="w-full max-w-[400px] h-auto drop-shadow-[0_0_50px_rgba(32,31,91,0.25)] relative z-10" 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Glow ring */}
              <circle cx="250" cy="250" r="210" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="10 15" className="animate-[spin_120s_linear_infinite]" />
              <circle cx="250" cy="250" r="180" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="5 5" className="animate-[spin_60s_linear_infinite]" />
              
              {/* Outer Gear */}
              <g className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: '250px 250px' }}>
                <circle cx="250" cy="250" r="140" stroke="#201F5B" strokeWidth="10" strokeOpacity="0.3" />
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 250 + Math.cos(angle) * 135;
                  const y1 = 250 + Math.sin(angle) * 135;
                  const x2 = 250 + Math.cos(angle) * 155;
                  const y2 = 250 + Math.sin(angle) * 155;
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#201F5B" strokeWidth="12" strokeLinecap="round" />
                  );
                })}
              </g>

              {/* Inner Gear (Opposite Rotation) */}
              <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '250px 250px', animationDirection: 'reverse' }}>
                <circle cx="250" cy="250" r="90" stroke="#D60000" strokeWidth="8" strokeOpacity="0.4" />
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x1 = 250 + Math.cos(angle) * 85;
                  const y1 = 250 + Math.sin(angle) * 85;
                  const x2 = 250 + Math.cos(angle) * 105;
                  const y2 = 250 + Math.sin(angle) * 105;
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D60000" strokeWidth="10" strokeLinecap="round" />
                  );
                })}
              </g>

              {/* Central Core & Brake Disc / Piston Style Lines */}
              <circle cx="250" cy="250" r="60" fill="#1C1C1E" stroke="#E2E8F0" strokeWidth="4" />
              <circle cx="250" cy="250" r="30" fill="url(#paint2_linear)" />
              
              {/* Dynamic Tech Lines */}
              <path d="M 250 50 L 250 220" stroke="#D60000" strokeWidth="3" strokeDasharray="5 5" />
              <path d="M 50 250 L 220 250" stroke="#201F5B" strokeWidth="3" strokeDasharray="5 5" />
              <path d="M 250 280 L 250 450" stroke="#201F5B" strokeWidth="3" />
              <path d="M 280 250 L 450 250" stroke="#D60000" strokeWidth="3" />
              
              {/* Tech details */}
              <rect x="235" y="320" width="30" height="6" rx="3" fill="#D60000" />
              <rect x="320" y="244" width="6" height="30" rx="3" fill="#201F5B" />

              {/* Definitions */}
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#201F5B" />
                  <stop offset="0.5" stopColor="#D60000" />
                  <stop offset="1" stopColor="#1C1C1E" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="500" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D60000" />
                  <stop offset="1" stopColor="#201F5B" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="220" y1="220" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#201F5B" />
                  <stop offset="1" stopColor="#D60000" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  );
}