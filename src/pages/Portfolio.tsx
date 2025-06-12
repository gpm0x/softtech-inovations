import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import CategoryFilter from "@/components/portfolio/CategoryFilter";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectModal from "@/components/portfolio/ProjectModal";
import PortfolioFinalCTA from "@/components/portfolio/PortfolioFinalCTA";

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  objective: string;
  technologies: string[];
  developmentTime: string;
  features: string[];
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
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
      <PortfolioHero />
      <CategoryFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PortfolioFinalCTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
