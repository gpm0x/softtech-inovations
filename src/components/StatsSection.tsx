
const StatsSection = () => {
  const stats = [
    {
      icon: "⚡",
      number: "100%",
      label: "Projetos Entregues",
      description: "No prazo acordado"
    },
    {
      icon: "🔒",
      number: "SSL",
      label: "Certificado Incluído",
      description: "Segurança garantida"
    },
    {
      icon: "📱",
      number: "Mobile",
      label: "Design Responsivo",
      description: "Para todos os dispositivos"
    },
    {
      icon: "🎯",
      number: "SEO",
      label: "Otimização",
      description: "Para mecanismos de busca"
    }
  ];

  return (
    <section className="py-24 bg-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)",
          backgroundSize: "600px 600px",
          backgroundPosition: "center"
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            Nossos Diferenciais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Qualidade & Excelência
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Garantias que fazem toda a diferença no seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/10"
            >
              <div className="text-5xl mb-6">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-300 mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{stat.label}</h3>
              <p className="text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
