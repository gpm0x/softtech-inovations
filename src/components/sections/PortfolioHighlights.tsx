
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PortfolioHighlights = () => {
  const portfolioHighlights = [
    {
      title: "E-commerce Fashion",
      description: "Loja virtual completa com sistema de pagamento integrado e gestão avançada de produtos",
      tech: "React, Node.js, PostgreSQL",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      results: "+200% vendas"
    },
    {
      title: "SaaS de Gestão",
      description: "Sistema de gestão empresarial com dashboard avançado e automação de processos",
      tech: "Next.js, Express, MongoDB",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      results: "50% + eficiência"
    },
    {
      title: "Landing Page Médica",
      description: "Página de vendas para clínica odontológica com foco em conversão e agendamentos",
      tech: "HTML, CSS, JavaScript",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      results: "+300% leads"
    }
  ];

  return (
    <section className="py-24 bg-dark-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300">
            Portfólio
          </span>
          <h2 className="heading-lg mb-6 text-white">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-slate-300">
            Alguns dos nossos projetos mais recentes e seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioHighlights.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl overflow-hidden hover-lift hover-glow transition-all duration-500 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.results}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-blue-300 font-medium">{project.tech}</p>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/portfolio"
            className="btn-primary inline-flex items-center gap-3 hover-glow"
          >
            Ver Portfólio Completo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
