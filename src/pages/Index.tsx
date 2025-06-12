
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import StatsSection from "@/components/StatsSection";
import { ArrowRight, CheckCircle, Star, Play, Code, Users, Award, Target } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Criação de Sites",
      description: "Sites profissionais e responsivos que convertem visitantes em clientes",
      icon: "🌐",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Superior"]
    },
    {
      title: "Landing Pages",
      description: "Páginas de vendas otimizadas para maximizar suas conversões",
      icon: "📈",
      features: ["Foco em Conversão", "Analytics Integrado", "Testes A/B"]
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas para vender online com segurança",
      icon: "🛒",
      features: ["Pagamento Seguro", "Gestão de Estoque", "Painel Admin"]
    },
    {
      title: "Micro-SaaS",
      description: "Sistemas personalizados para automatizar seu negócio",
      icon: "⚙️",
      features: ["Automação Total", "APIs Customizadas", "Dashboard Avançado"]
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart",
      text: "A SoftTech transformou nossa ideia em uma plataforma incrível. Profissionais excepcionais que entregaram além das nossas expectativas!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ana Santos",
      company: "Boutique Fashion",
      text: "Nosso e-commerce ficou perfeito! Vendas aumentaram 200% após o lançamento. Equipe muito profissional e dedicada.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b197?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "João Oliveira",
      company: "Consultoria JO",
      text: "Site profissional que realmente gera leads qualificados. A SoftTech entende do que faz e entrega resultados!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

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

  const benefits = [
    {
      title: "Design responsivo para todos os dispositivos",
      icon: <Code className="w-6 h-6 text-blue-light" />
    },
    {
      title: "Otimização para mecanismos de busca (SEO)",
      icon: <Target className="w-6 h-6 text-blue-light" />
    },
    {
      title: "Suporte técnico completo e contínuo",
      icon: <Users className="w-6 h-6 text-blue-light" />
    },
    {
      title: "Entrega dentro do prazo acordado",
      icon: <Award className="w-6 h-6 text-blue-light" />
    }
  ];

  const processSteps = [
    { step: "01", title: "Briefing", desc: "Entendemos suas necessidades" },
    { step: "02", title: "Planejamento", desc: "Criamos estratégia detalhada" },
    { step: "03", title: "Desenvolvimento", desc: "Codificamos sua solução" },
    { step: "04", title: "Entrega", desc: "Lançamos e damos suporte" }
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-dark-blue text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1d4ed8 0%, transparent 50%)",
              backgroundSize: "400px 400px"
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="mb-8 animate-fade-in">
                  <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                    ✨ Soluções Digitais que Transformam Negócios
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white-soft animate-fade-in">
                  Transformamos suas
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                    ideias em realidade
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-light mb-12 leading-relaxed animate-fade-in">
                  Desenvolvemos sites, landing pages, e-commerce e micro-SaaS que realmente convertem e geram resultados excepcionais para seu negócio.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in">
                  <a
                    href="https://wa.me/5511954802686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-3"
                  >
                    💬 Solicitar Orçamento Grátis
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <Link
                    to="/portfolio"
                    className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-dark-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3"
                  >
                    <Play className="w-5 h-5" />
                    Ver Projetos
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                    alt="Desenvolvimento de software"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white-soft mb-4">
                      Tecnologia de Ponta
                    </h3>
                    <p className="text-gray-light mb-6">
                      Utilizamos as tecnologias mais modernas do mercado para criar soluções robustas e escaláveis.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-light">100%</div>
                        <div className="text-sm text-gray-light">Responsivo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-light">24/7</div>
                        <div className="text-sm text-gray-light">Suporte</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-light">SSL</div>
                        <div className="text-sm text-gray-light">Segurança</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Nossos Serviços
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
              Soluções completas para seu negócio
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços digitais para levar sua empresa ao próximo nível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 text-center hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white-soft mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-light leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-blue-300 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel */}
      <TechCarousel />

      {/* Process Section */}
      <section className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-gray-light">
              Metodologia comprovada para resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-500/30 transform translate-x-1/2"></div>
                )}
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white-soft mb-2">{step.title}</h3>
                <p className="text-gray-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Benefits Section */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-8">
                  Por que escolher a SoftTech?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                      <div className="flex-shrink-0 p-2 bg-slate-700/50 rounded-lg">
                        {benefit.icon}
                      </div>
                      <p className="text-lg text-gray-light">{benefit.title}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://wa.me/5511954802686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Falar com Especialista
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white-soft mb-8 text-center">Resultados Garantidos</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-300 mb-2">+3</div>
                    <p className="text-gray-light">Anos de Experiência</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-300 mb-2">+58</div>
                    <p className="text-gray-light">Clientes Satisfeitos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-300 mb-2">+75</div>
                    <p className="text-gray-light">Projetos Entregues</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-300 mb-2">100%</div>
                    <p className="text-gray-light">Taxa de Sucesso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Depoimentos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-light">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white-soft text-lg">{testimonial.name}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-light italic text-lg leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-gray-light">
              Alguns dos nossos projetos mais recentes e seus resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.results}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white-soft mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-light mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-blue-300 font-medium">{project.tech}</p>
                    <ArrowRight className="w-5 h-5 text-gray-light group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver Portfólio Completo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-dark-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 75% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 25% 75%, #1d4ed8 0%, transparent 50%)",
              backgroundSize: "400px 400px"
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white-soft mb-8">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-gray-light mb-12 max-w-4xl mx-auto leading-relaxed">
            A SoftTech entrega mais do que códigos: entregamos resultados que transformam seu negócio e aceleram seu crescimento digital. Vamos conversar?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              💬 Falar no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="group border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-dark-blue px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              Página de Contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
