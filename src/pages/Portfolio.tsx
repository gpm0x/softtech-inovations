
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "E-commerce Fashion Store",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      description: "Loja virtual completa para moda feminina com sistema de pagamento integrado e gestão de estoque.",
      objective: "Criar uma experiência de compra online intuitiva e segura para aumentar as vendas da marca.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      developmentTime: "6 semanas",
      features: [
        "Sistema de pagamento seguro",
        "Gestão de estoque em tempo real",
        "Painel administrativo completo",
        "Design responsivo",
        "SEO otimizado"
      ]
    },
    {
      id: 2,
      name: "SaaS de Gestão Empresarial",
      category: "Micro-SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      description: "Sistema de gestão completo com dashboard avançado para pequenas e médias empresas.",
      objective: "Automatizar processos empresariais e fornecer insights através de relatórios detalhados.",
      technologies: ["Next.js", "Express.js", "MongoDB", "Chart.js", "Firebase"],
      developmentTime: "8 semanas",
      features: [
        "Dashboard com métricas em tempo real",
        "Gestão de clientes e vendas",
        "Relatórios automatizados",
        "Sistema de notificações",
        "API REST completa"
      ]
    },
    {
      id: 3,
      name: "Landing Page Clínica Odontológica",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500",
      description: "Página de vendas otimizada para conversão de agendamentos médicos.",
      objective: "Aumentar o número de agendamentos através de uma página altamente persuasiva.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
      developmentTime: "2 semanas",
      features: [
        "Design focado em conversão",
        "Formulário de agendamento",
        "Integração com WhatsApp",
        "Depoimentos de pacientes",
        "Otimização para SEO local"
      ]
    },
    {
      id: 4,
      name: "Portfólio de Arquiteta",
      category: "Site Institucional",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      description: "Site institucional elegante para exibir projetos arquitetônicos com galeria interativa.",
      objective: "Criar uma vitrine digital profissional para atrair novos clientes e projetos.",
      technologies: ["React", "CSS3", "JavaScript", "Netlify"],
      developmentTime: "3 semanas",
      features: [
        "Galeria de projetos interativa",
        "Design minimalista e elegante",
        "Formulário de contato",
        "Blog integrado",
        "Otimização para dispositivos móveis"
      ]
    },
    {
      id: 5,
      name: "App de Delivery",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500",
      description: "Plataforma de delivery com sistema de pedidos online e rastreamento em tempo real.",
      objective: "Conectar restaurantes locais com clientes através de uma plataforma de delivery eficiente.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
      developmentTime: "10 semanas",
      features: [
        "Sistema de pedidos online",
        "Rastreamento em tempo real",
        "Múltiplas formas de pagamento",
        "Chat com entregador",
        "Painel para restaurantes"
      ]
    },
    {
      id: 6,
      name: "Sistema de Agendamento",
      category: "Micro-SaaS",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
      description: "Sistema de agendamento online para clínicas e consultórios médicos.",
      objective: "Facilitar o agendamento de consultas e reduzir cancelamentos através de lembretes automáticos.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Twilio API"],
      developmentTime: "5 semanas",
      features: [
        "Agenda online integrada",
        "Lembretes por SMS/WhatsApp",
        "Gestão de pacientes",
        "Relatórios de atendimento",
        "Sistema de pagamento"
      ]
    }
  ];

  const categories = ["Todos", "E-commerce", "Micro-SaaS", "Landing Page", "Site Institucional"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0b1320] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso <span className="text-blue-400">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-300">
              Veja o que já entregamos e imagine o que podemos fazer por você
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#0b1320] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.developmentTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0b1320] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{project.technologies.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-[#0b1320]">
                  {selectedProject.name}
                </h2>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {selectedProject.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Descrição do Projeto</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                  <h3 className="text-xl font-semibold mb-3">Objetivo</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.objective}</p>

                  <h3 className="text-xl font-semibold mb-3">Tempo de Desenvolvimento</h3>
                  <p className="text-gray-600">{selectedProject.developmentTime}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Funcionalidades</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://wa.me/5511954802686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                >
                  💬 Quero um projeto assim
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-[#0b1320] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Viu algo que te interessou?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Cada projeto é único e desenvolvido com dedicação total. Vamos criar algo incrível para seu negócio também!
          </p>
          <a
            href="https://wa.me/5511954802686"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
          >
            💬 Solicitar Orçamento Agora
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
