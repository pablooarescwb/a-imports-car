import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark-gray border-t border-border-dark text-gray-400">
      
      {/* Upper Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo & Intro */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-2xl font-black tracking-wider text-white">
              A IMPORTS <span className="text-brand-red">CAR</span>
            </span>
            <p className="text-sm leading-relaxed max-w-sm">
              Sua parceira em peças automotivas originais e usadas. Oferecemos segurança jurídica, economia garantida e procedência certificada pelo DETRAN.
            </p>
            <div className="text-xs text-gray-500 font-medium">
              Credenciamento DETRAN-SP em conformidade com a Lei do Desmonte (Lei nº 12.977/14).
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#categorias" className="hover:text-white transition-colors">Categorias de Peças</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Contact Details summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contatos</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                <span>Rua Equador, 1165, Vila Mariana, Ribeirão Preto - SP, 14075-300</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue flex-shrink-0" />
                <span>(16) 99337-9493</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-green flex-shrink-0" />
                <span>contato@importscar.com.br</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-brand-dark py-6 border-t border-border-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} A Imports Car Auto Peças. Todos os direitos reservados. CNPJ sugerido sob operação local.
          </p>
          <a
            href="#"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>

    </footer>
  );
}