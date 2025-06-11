
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const services = [
    {
      title: "Criação de Sites",
      description: "Sites profissionais e responsivos que convertem visitantes em clientes",
      icon: "🌐"
    },
    {
      title: "Páginas de Vendas",
      description: "Landing pages otimizadas para maximizar suas conversões",
      icon: "📈"
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas para vender online com segurança",
      icon: "🛒"
    },
    {
      title: "Micro-SaaS",
      description: "Sistemas personalizados para automatizar seu negócio",
      icon: "⚙️"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart",
      text: "A SoftTech transformou nossa ideia em uma plataforma incrível. Profissionais excepcionais!",
      rating: 5
    },
    {
      name: "Ana Santos",
      company: "Boutique Fashion",
      text: "Nosso e-commerce ficou perfeito! Vendas aumentaram 200% após o lançamento.",
      rating: 5
    },
    {
      name: "João Oliveira",
      company: "Consultoria JO",
      text: "Site profissional que realmente gera leads. Recomendo a SoftTech!",
      rating: 5
    }
  ];

  const portfolioHighlights = [
    {
      title: "E-commerce Fashion",
      description: "Loja virtual completa com sistema de pagamento integrado",
      tech: "React, Node.js, PostgreSQL",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      title: "SaaS de Gestão",
      description: "Sistema de gestão empresarial com dashboard avançado",
      tech: "Next.js, Express, MongoDB",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    {
      title: "Landing Page Médica",
      description: "Página de vendas para clínica odontológica",
      tech: "HTML, CSS, JavaScript",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0b1320] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções digitais sob medida para transformar sua{" "}
              <span className="text-blue-400">ideia em realidade</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvemos sites, landing pages, e-commerce e micro-SaaS que realmente convertem e geram resultados para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511954802686"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
              >
                💬 Solicitar Orçamento
              </a>
              <Link
                to="/portfolio"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
              >
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-lg">
              Soluções completas para todas as suas necessidades digitais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0b1320] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <TechCarousel />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-600 text-lg">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-[#0b1320]">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-4">
              Portfólio em Destaque
            </h2>
            <p className="text-gray-600 text-lg">
              Alguns dos nossos projetos mais recentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0b1320] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-[#0b1320] text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
            >
              Ver Portfólio Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0b1320] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Seu projeto precisa de atenção e excelência
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A SoftTech entrega mais do que códigos: entregamos resultados que transformam seu negócio e aceleram seu crescimento digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
            >
              💬 Falar no WhatsApp
            </a>
            <Link
              to="/contact"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
            >
              Página de Contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
