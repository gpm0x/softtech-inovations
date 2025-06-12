
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-dark-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg mb-8 text-white animate-slide-up">
            Agende sua reunião com a gente
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Vamos conversar sobre seu projeto e descobrir juntos como podemos transformar suas ideias em soluções digitais de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button className="btn-primary flex items-center justify-center gap-3 hover-glow">
              <Calendar className="w-5 h-5" />
              Agendar Reunião Gratuita
            </button>
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-3"
            >
              💬 WhatsApp: (11) 95480-2686
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
