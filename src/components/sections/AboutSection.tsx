
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Zap, Shield, Users, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left">
              <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300">
                Sobre a SoftTech
              </span>
              <h2 className="heading-lg mb-8 text-white">
                Transformamos ideias em <span className="gradient-text">realidade digital</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Somos uma empresa especializada em desenvolvimento de soluções digitais inovadoras. Nossa missão é transformar ideias em produtos digitais que geram resultados reais para nossos clientes.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Equipe especializada em tecnologias modernas",
                  "Processo ágil e transparente",
                  "Suporte contínuo pós-entrega",
                  "Foco total em resultados"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-secondary inline-flex items-center gap-3">
                Conheça Nossa História
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="animate-slide-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-2xl hover-lift">
                  <Zap className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Agilidade</h3>
                  <p className="text-slate-400 text-sm">Entregas rápidas sem comprometer a qualidade</p>
                </div>
                <div className="glass-card p-6 rounded-2xl hover-lift" style={{animationDelay: '0.1s'}}>
                  <Shield className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Segurança</h3>
                  <p className="text-slate-400 text-sm">Código seguro e boas práticas de desenvolvimento</p>
                </div>
                <div className="glass-card p-6 rounded-2xl hover-lift" style={{animationDelay: '0.2s'}}>
                  <Users className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Suporte</h3>
                  <p className="text-slate-400 text-sm">Acompanhamento completo durante todo o projeto</p>
                </div>
                <div className="glass-card p-6 rounded-2xl hover-lift" style={{animationDelay: '0.3s'}}>
                  <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Inovação</h3>
                  <p className="text-slate-400 text-sm">Sempre utilizando as tecnologias mais modernas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
