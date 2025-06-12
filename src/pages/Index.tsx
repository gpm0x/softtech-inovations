
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import StatsSection from "@/components/StatsSection";
import { ArrowRight, CheckCircle, Star, Play, Code, Users, Award, Target, Zap, Shield, Rocket, Calendar } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Criação de Sites",
      description: "Sites profissionais e responsivos que convertem visitantes em clientes",
      icon: <Code className="w-8 h-8" />,
      features: ["Design Responsivo", "SEO Otimizado", "Performance Superior"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Páginas de Vendas",
      description: "Landing pages otimizadas para maximizar suas conversões",
      icon: <Target className="w-8 h-8" />,
      features: ["Foco em Conversão", "Analytics Integrado", "Testes A/B"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas para vender online com segurança",
      icon: <Shield className="w-8 h-8" />,
      features: ["Pagamento Seguro", "Gestão de Estoque", "Painel Admin"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Micro-SaaS",
      description: "Sistemas personalizados para automatizar seu negócio",
      icon: <Rocket className="w-8 h-8" />,
      features: ["Automação Total", "APIs Customizadas", "Dashboard Avançado"],
      gradient: "from-orange-500 to-red-500"
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
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Otimização para mecanismos de busca (SEO)",
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Suporte técnico completo e contínuo",
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Entrega dentro do prazo acordado",
      icon: <Award className="w-6 h-6 text-blue-400" />
    }
  ];

  const processSteps = [
    { step: "01", title: "Briefing", desc: "Entendemos suas necessidades", icon: <Users className="w-6 h-6" /> },
    { step: "02", title: "Planejamento", desc: "Criamos estratégia detalhada", icon: <Target className="w-6 h-6" /> },
    { step: "03", title: "Desenvolvimento", desc: "Codificamos sua solução", icon: <Code className="w-6 h-6" /> },
    { step: "04", title: "Entrega", desc: "Lançamos e damos suporte", icon: <Rocket className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-dark-gradient">
      <Header />
      
      {/* Hero Section - Design Sofisticado */}
      <section className="relative bg-dark-gradient text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left animate-slide-left">
                <div className="mb-8">
                  <span className="inline-block glass px-6 py-3 rounded-full text-sm font-medium mb-6 border text-blue-300">
                    ✨ Transformamos ideias em soluções digitais
                  </span>
                </div>
                
                <h1 className="heading-xl mb-8 text-white animate-slide-up">
                  Desenvolvemos o
                  <span className="block gradient-text animate-gradient">
                    futuro digital
                  </span>
                  do seu negócio
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Criamos sites, landing pages, e-commerce e micro-SaaS que realmente convertem e geram resultados excepcionais para empresas visionárias.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
                  <a
                    href="https://wa.me/5511954802686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group btn-primary flex items-center gap-3 hover-glow"
                  >
                    💬 Solicitar Orçamento Grátis
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="group btn-secondary flex items-center gap-3">
                    <Calendar className="w-5 h-5" />
                    Agendar Reunião
                  </button>
                </div>
                
                <div className="mt-12 grid grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">+3</div>
                    <div className="text-sm text-slate-400">Anos de Mercado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">+58</div>
                    <div className="text-sm text-slate-400">Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">+75</div>
                    <div className="text-sm text-slate-400">Projetos</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-right">
                <div className="glass-card rounded-3xl p-8 hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                    alt="Desenvolvimento de software"
                    className="w-full h-80 object-cover rounded-2xl mb-8"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Tecnologia de Ponta
                    </h3>
                    <p className="text-slate-300 mb-8">
                      Utilizamos as tecnologias mais modernas do mercado para criar soluções robustas e escaláveis.
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                        <div className="text-xs text-slate-400">Responsivo</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                        <div className="text-xs text-slate-400">Suporte</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">SSL</div>
                        <div className="text-xs text-slate-400">Segurança</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a SoftTech Section */}
      <section className="py-24 section-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-left">
                <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300">
                  Sobre a SoftTech
                </span>
                <h2 className="heading-lg mb-8 text-white">
                  Transformamos ideias em <span className="gradient-text">realidade digital</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Somos uma empresa especializada em desenvolvimento de soluções digitais inovadoras. Nossa missão é transformar ideias em produtos digitais que geram resultados reais para nossos clientes.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Equipe especializada em tecnologias modernas",
                    "Processo ágil e transparente",
                    "Suporte contínuo pós-entrega",
                    "Foco total em resultados"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="btn-secondary inline-flex items-center gap-3">
                  Conheça Nossa História
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="animate-slide-right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-2xl hover-lift">
                    <Zap className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Agilidade</h3>
                    <p className="text-slate-400 text-sm">Entregas rápidas sem comprometer a qualidade</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl hover-lift" style={{animationDelay: '0.1s'}}>
                    <Shield className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Segurança</h3>
                    <p className="text-slate-400 text-sm">Código seguro e boas práticas de desenvolvimento</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl hover-lift" style={{animationDelay: '0.2s'}}>
                    <Users className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Suporte</h3>
                    <p className="text-slate-400 text-sm">Acompanhamento completo durante todo o projeto</p>
                  </div>
                  <div className="glass-card p-6 rounded-2xl hover-lift" style={{animationDelay: '0.3s'}}>
                    <Rocket className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Inovação</h3>
                    <p className="text-slate-400 text-sm">Sempre utilizando as tecnologias mais modernas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-dark-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300">
              Nossos Serviços
            </span>
            <h2 className="heading-lg mb-6 text-white">
              Soluções completas para seu negócio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços digitais para levar sua empresa ao próximo nível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group glass-card p-8 rounded-3xl text-center hover-lift hover-glow transition-all duration-500"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
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
      <section className="py-24 section-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 text-white">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-slate-300">
              Metodologia comprovada para resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform translate-x-1/2 z-0"></div>
                )}
                <div className="glass-card p-8 rounded-2xl hover-lift relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Portfolio Highlights */}
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

      {/* Testimonials */}
      <section className="py-24 section-darker">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6 text-blue-300">
              Depoimentos
            </span>
            <h2 className="heading-lg mb-6 text-white">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-slate-300">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover-lift transition-all duration-500 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-300 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Agendamento */}
      <section className="py-24 bg-dark-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-purple-600/30"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-8 text-white animate-slide-up">
              Agende sua reunião com a gente
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Vamos conversar sobre seu projeto e descobrir juntos como podemos transformar suas ideias em soluções digitais de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button className="btn-primary flex items-center justify-center gap-3 hover-glow">
                <Calendar className="w-5 h-5" />
                Agendar Reunião Gratuita
              </button>
              <a
                href="https://wa.me/5511954802686"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-3"
              >
                💬 WhatsApp: (11) 95480-2686
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
