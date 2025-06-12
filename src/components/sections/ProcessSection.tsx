
import { Users, Target, Code, Rocket } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    { step: "01", title: "Briefing", desc: "Entendemos suas necessidades", icon: <Users className="w-6 h-6" /> },
    { step: "02", title: "Planejamento", desc: "Criamos estratégia detalhada", icon: <Target className="w-6 h-6" /> },
    { step: "03", title: "Desenvolvimento", desc: "Codificamos sua solução", icon: <Code className="w-6 h-6" /> },
    { step: "04", title: "Entrega", desc: "Lançamos e damos suporte", icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 section-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-white">
            Nosso Processo de Trabalho
          </h2>
          <p className="text-xl text-slate-300">
            Metodologia comprovada para resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center relative animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform translate-x-1/2 z-0"></div>
              )}
              <div className="glass-card p-8 rounded-2xl hover-lift relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-blue-400 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
