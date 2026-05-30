import React, { useState } from 'react';
import { Phone, Menu, X, MessageSquare } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-dark bg-brand-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="font-display text-xl font-black tracking-wider text-white sm:text-2xl">
                A IMPORTS <span className="text-brand-red">CAR</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Home</a>
            <a href="#diferenciais" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Diferenciais</a>
            <a href="#categorias" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Peças</a>
            <a href="#sobre" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Sobre</a>
            <a href="#contato" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">Contato</a>
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/5516993379493"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-brand-blue/30 border border-brand-blue/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-blue/50 transition-all duration-300"
            >
              <Phone size={14} className="text-brand-blue-400" />
              <span>(16) 99337-9493</span>
            </a>
            <a 
              href="https://wa.me/5516993379493"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-brand-red/90 transition-all duration-300 shadow-lg shadow-brand-red/20"
            >
              <MessageSquare size={14} />
              <span>Fazer Cotação</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-brand-dark-gray hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border-dark bg-brand-dark" id="mobile-menu">
          <div className="space-y-1 px-2 pb-4 pt-2">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-brand-dark-gray hover:text-white"
            >
              Home
            </a>
            <a
              href="#diferenciais"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-brand-dark-gray hover:text-white"
            >
              Diferenciais
            </a>
            <a
              href="#categorias"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-brand-dark-gray hover:text-white"
            >
              Peças
            </a>
            <a
              href="#sobre"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-brand-dark-gray hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-brand-dark-gray hover:text-white"
            >
              Contato
            </a>
            <div className="mt-4 flex flex-col gap-2 px-3">
              <a
                href="https://wa.me/5516993379493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-dark-gray border border-border-dark py-2.5 text-sm font-semibold text-white"
              >
                <Phone size={16} />
                <span>(16) 99337-9493</span>
              </a>
              <a
                href="https://wa.me/5516993379493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-red py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20"
              >
                <MessageSquare size={16} />
                <span>Fazer Cotação via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}