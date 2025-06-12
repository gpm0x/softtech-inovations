
const ServicesProcessSection = () => {
  const processSteps = [
    { step: "01", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
    { step: "02", title: "Planejamento", desc: "Criamos estratégia e cronograma detalhado" },
    { step: "03", title: "Desenvolvimento", desc: "Codificamos com as melhores práticas" },
    { step: "04", title: "Entrega", desc: "Lançamos e oferecemos suporte contínuo" }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
            Como trabalhamos
          </h2>
          <p className="text-xl text-gray-light">
            Nosso processo otimizado garante resultados excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-light mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-white-soft mb-3">{item.title}</h3>
              <p className="text-gray-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;
