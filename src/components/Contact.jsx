import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  const mapQueryUrl = "https://maps.google.com/maps?q=Rua%20Equador,%201165%20-%20Vila%20Mariana,%20Ribeir%C3%A3o%20Preto%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const externalMapUrl = "https://maps.google.com/?q=Rua+Equador,+1165,+Vila+Mariana,+Ribeir%C3%A3o+Preto+-+SP,+14075-300";

  return (
    <section id="contato" className="relative py-24 bg-brand-dark border-t border-border-dark">
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-wider text-brand-blue uppercase">Fale Conosco & Localização</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Venha nos Visitar ou Faça um Orçamento
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Estamos localizados em Ribeirão Preto-SP e enviamos para todo o país. Veja como nos encontrar ou entrar em contato.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-brand-dark-gray border border-border-dark rounded-2xl p-8 shadow-lg shadow-black/25">
            
            {/* Business Info Header */}
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white mb-2">
                A Imports Car
              </h3>
              <p className="text-xs text-brand-blue font-semibold uppercase tracking-wider mb-8">
                Auto Peças Usadas e Desmonte
              </p>

              {/* Items List */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-border-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">Endereço Físico</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Rua Equador, 1165, Vila Mariana<br />
                      Ribeirão Preto - SP, CEP 14075-300
                    </p>
                    <a 
                      href={externalMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-brand-red font-semibold hover:underline mt-2"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Contact phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-border-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">WhatsApp & Telefone</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      (16) 99337-9493
                    </p>
                    <a 
                      href="https://wa.me/5516993379493"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-brand-blue font-semibold hover:underline mt-2"
                    >
                      <span>Iniciar conversa</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-brand-dark border border-border-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={20} className="text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">E-mail Principal</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      contato@importscar.com.br
                    </p>
                    <a 
                      href="mailto:contato@importscar.com.br"
                      className="inline-flex items-center gap-1 text-xs text-brand-green font-semibold hover:underline mt-2"
                    >
                      <span>Enviar e-mail</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Working Hours */}
            <div className="border-t border-border-dark pt-6 mt-8 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock size={16} className="text-brand-red" />
                <span>Horário de Funcionamento</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
                <div>
                  <span className="block font-medium text-gray-300">Segunda a Sexta</span>
                  <span>08:00h às 18:00h</span>
                </div>
                <div>
                  <span className="block font-medium text-gray-300">Sábados</span>
                  <span>08:00h às 12:00h</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Container */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-dark bg-brand-dark-gray min-h-[350px] lg:min-h-full relative shadow-lg shadow-black/25">
            {/* Custom styled map frame */}
            <iframe 
              src={mapQueryUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '380px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="A Imports Car Localização"
              className="w-full h-full grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
            {/* Small Overlay Info */}
            <div className="absolute bottom-4 left-4 bg-brand-dark/90 border border-border-dark backdrop-blur-sm px-4 py-2.5 rounded-lg pointer-events-none hidden sm:block">
              <span className="text-[10px] uppercase font-bold text-brand-red tracking-wider block">Endereço</span>
              <span className="text-xs text-white">Rua Equador, 1165 - Ribeirão Preto-SP</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}