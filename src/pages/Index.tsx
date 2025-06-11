
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import StatsSection from "@/components/StatsSection";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

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

  const benefits = [
    "Design responsivo para todos os dispositivos",
    "Otimização para mecanismos de busca (SEO)",
    "Suporte técnico completo",
    "Entrega dentro do prazo acordado"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-blue-600 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ Soluções Digitais Personalizadas
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Transformamos suas
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                ideias em realidade
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Desenvolvemos sites, landing pages, e-commerce e micro-SaaS que realmente convertem e geram resultados para seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/5511954802686"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 shadow-xl flex items-center gap-3"
              >
                💬 Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/portfolio"
                className="group border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
              >
                Ver Portfólio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                  Por que escolher a SoftTech?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <p className="text-lg text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Resultados Garantidos</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-200 mb-2">+3</div>
                    <p className="text-blue-100">Anos de Experiência</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-200 mb-2">+58</div>
                    <p className="text-blue-100">Clientes Atendidos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-200 mb-2">+75</div>
                    <p className="text-blue-100">Projetos Entregues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Soluções completas para seu negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços digitais para levar sua empresa ao próximo nível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <TechCarousel />

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-blue-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Alguns dos nossos projetos mais recentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105"
            >
              Ver Portfólio Completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            A SoftTech entrega mais do que códigos: entregamos resultados que transformam seu negócio e aceleram seu crescimento digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105 flex items-center justify-center gap-3"
            >
              💬 Falar no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="group border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              Página de Contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
