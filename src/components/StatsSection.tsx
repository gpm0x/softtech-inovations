
const StatsSection = () => {
  const stats = [
    {
      icon: "⏰",
      number: "+3",
      label: "Anos de Experiência",
      description: "No mercado digital"
    },
    {
      icon: "👥",
      number: "+58",
      label: "Clientes Atendidos",
      description: "Projetos únicos"
    },
    {
      icon: "🚀",
      number: "+75",
      label: "Projetos Entregues",
      description: "Com sucesso"
    }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Resultados & Conquistas
          </h2>
          <p className="text-blue-100 text-lg">
            Números que comprovam nossa dedicação e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors duration-300"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-300 mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-blue-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
