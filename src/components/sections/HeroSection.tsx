import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-dark-gradient text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left animate-slide-left">
              <div className="mb-8">
                <span className="inline-block glass px-6 py-3 rounded-full text-sm font-medium mb-6 border text-blue-300">
                  ✨ Transformamos ideias em soluções digitais
                </span>
              </div>
              
              <h1 className="heading-xl mb-8 text-white animate-slide-up">
                Desenvolvemos o
                <span className="block gradient-text animate-gradient">
                  futuro digital
                </span>
                do seu negócio
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                Criamos sites, landing pages, e-commerce e micro-SaaS que realmente convertem e geram resultados excepcionais para empresas visionárias.
              </p>
              
              <div className="flex justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.4s'}}>
                <a
                  href="https://wa.me/5511954802686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-primary flex items-center gap-3 hover-glow"
                >
                  💬 Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative animate-slide-right">
              <div className="glass-card rounded-3xl p-8 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Desenvolvimento de software"
                  className="w-full h-80 object-cover rounded-2xl mb-8"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Tecnologia de Ponta
                  </h3>
                  <p className="text-slate-300 mb-8">
                    Utilizamos as tecnologias mais modernas do mercado para criar soluções robustas e escaláveis.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                      <div className="text-xs text-slate-400">Responsivo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                      <div className="text-xs text-slate-400">Suporte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">SSL</div>
                      <div className="text-xs text-slate-400">Segurança</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
