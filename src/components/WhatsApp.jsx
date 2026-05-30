import React from 'react';

export default function WhatsApp() {
  const whatsappUrl = "https://wa.me/5516993379493?text=Ol%C3%A1!%20Estou%20visitando%20o%20site%20e%20gostar%C3%ADa%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20pe%C3%A7as.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Pulse Outer Rings */}
      <div className="absolute w-16 h-16 rounded-full bg-brand-green/30 animate-pulse-ring"></div>

      {/* Floating Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Fale no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-green hover:bg-brand-green-hover text-white shadow-2xl transition-all duration-300 hover:scale-110 animate-float border border-white/10 group"
      >
        {/* Official WhatsApp Logo SVG */}
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.115.957 11.5 1.046c-5.437 0-9.862 4.371-9.866 9.8-.001 1.762.483 3.483 1.4 5.006L2.01 21.84l6.19-1.61c-.55.33-.94.57-1.55.92z"/>
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-brand-dark-gray text-white text-xs font-semibold px-3 py-2 rounded-lg border border-border-dark shadow-xl whitespace-nowrap origin-right">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}