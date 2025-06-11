
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
    <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Qualidade & Excelência
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Garantias que fazem toda a diferença no seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-blue-700/50 backdrop-blur-sm hover:bg-blue-600/50 transition-all duration-300 hover:-translate-y-2 border border-blue-600/30"
            >
              <div className="text-5xl mb-6">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-200 mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{stat.label}</h3>
              <p className="text-blue-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
