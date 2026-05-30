import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Categories from './components/Categories';
import Contact from './components/Contact';
import WhatsApp from './components/WhatsApp';
import Footer from './components/Footer';
import { Award, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 flex flex-col justify-between selection:bg-brand-red selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Trust Indicators Section */}
        <Trust />

        {/* Parts Categories Section */}
        <Categories />

        {/* Sobre Nós Section */}
        <section id="sobre" className="relative py-24 bg-brand-dark border-t border-border-dark overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Visual Metrics */}
              <div className="lg:col-span-5 order-last lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Metric 1 */}
                  <div className="bg-brand-dark-gray border border-border-dark p-6 rounded-2xl text-center space-y-2">
                    <span className="block font-display text-4xl sm:text-5xl font-black text-brand-blue">100%</span>
                    <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Procedência</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-brand-dark-gray border border-border-dark p-6 rounded-2xl text-center space-y-2">
                    <span className="block font-display text-4xl sm:text-5xl font-black text-brand-red">90 Dias</span>
                    <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">De Garantia</span>
                  </div>

                  {/* Metric 3 */}
                  <div className="bg-brand-dark-gray border border-border-dark p-6 rounded-2xl text-center space-y-2">
                    <span className="block font-display text-4xl sm:text-5xl font-black text-brand-green">16+</span>
                    <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Região DDD</span>
                  </div>

                  {/* Metric 4 */}
                  <div className="bg-brand-dark-gray border border-border-dark p-6 rounded-2xl text-center space-y-2">
                    <span className="block font-display text-4xl sm:text-5xl font-black text-white">Brasil</span>
                    <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Entrega Segura</span>
                  </div>

                </div>
              </div>

              {/* Right Column: About Content */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-3">
                  <span className="text-xs font-semibold tracking-wider text-brand-blue uppercase">Quem Somos</span>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Compromisso com Qualidade, Procedência e Economia
                  </h2>
                </div>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  A <strong>A Imports Car Auto Peças</strong> atua no comércio de autopeças originais seminovas e usadas para veículos nacionais e importados. Somos credenciados oficialmente pelos órgãos competentes para garantir a procedência legal de todas as peças em nosso pátio.
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Oferecemos uma proposta de valor focada em peças automotivas originais com garantia de funcionamento e preços competitivos, resultando em até 70% de economia se comparadas a peças novas. Nossa equipe técnica é qualificada e treinada para analisar e testar cada componente, garantindo satisfação e entregas seguras em todo o território nacional.
                </p>

                {/* Focus features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-dark pt-8">
                  <div className="flex gap-3">
                    <Award className="text-brand-red flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Qualidade Assegurada</h4>
                      <p className="text-xs text-gray-400">Todos os motores e componentes mecânicos são testados sob critérios rígidos.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <ShieldAlert className="text-brand-blue flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Baixa Legal e Nota Fiscal</h4>
                      <p className="text-xs text-gray-400">Veículos adquiridos exclusivamente em leilões autorizados, livres de sinistros.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Contact and Maps Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Animated WhatsApp CTA */}
      <WhatsApp />
    </div>
  );
}

export default App;