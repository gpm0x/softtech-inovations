
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Code, Palette, ShoppingCart, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Criação de Sites Profissionais",
      icon: <Code className="w-12 h-12 text-blue-light" />,
      description: "Desenvolvemos sites responsivos, modernos e otimizados para SEO que transmitem credibilidade e convertem visitantes em clientes.",
      benefits: [
        "Design responsivo para todos os dispositivos",
        "Otimização para mecanismos de busca (SEO)",
        "Carregamento rápido e performance otimizada",
        "Integração com redes sociais",
        "Sistema de gerenciamento de conteúdo",
        "Suporte técnico completo"
      ],
      technologies: "HTML, CSS, JavaScript, React, WordPress",
      price: "A partir de R$ 2.500"
    },
    {
      title: "Páginas de Vendas (Landing Pages)",
      icon: <Palette className="w-12 h-12 text-blue-light" />,
      description: "Landing pages estratégicas e persuasivas, criadas para maximizar suas conversões e gerar mais leads qualificados para seu negócio.",
      benefits: [
        "Design focado em conversão",
        "Copywriting persuasivo",
        "Formulários otimizados",
        "Integração com ferramentas de marketing",
        "Testes A/B para melhor performance",
        "Analytics e relatórios detalhados"
      ],
      technologies: "HTML, CSS, JavaScript, React, Next.js",
      price: "A partir de R$ 1.800"
    },
    {
      title: "Lojas Virtuais (E-commerce)",
      icon: <ShoppingCart className="w-12 h-12 text-blue-light" />,
      description: "E-commerce completo com sistema de pagamento seguro, gestão de estoque e painel administrativo para vender online com confiança.",
      benefits: [
        "Sistema de pagamento integrado",
        "Gestão completa de produtos",
        "Controle de estoque automático",
        "Painel administrativo intuitivo",
        "Múltiplas formas de pagamento",
        "Certificado SSL incluído"
      ],
      technologies: "React, Node.js, PostgreSQL, Stripe, PayPal",
      price: "A partir de R$ 4.500"
    },
    {
      title: "Desenvolvimento de Micro-SaaS",
      icon: <Settings className="w-12 h-12 text-blue-light" />,
      description: "Sistemas web personalizados para automatizar processos do seu negócio, aumentar produtividade e reduzir custos operacionais.",
      benefits: [
        "Automação de processos",
        "Interface intuitiva e moderna",
        "Banco de dados seguro",
        "API's customizadas",
        "Dashboard com métricas",
        "Escalabilidade garantida"
      ],
      technologies: "React, Node.js, Express, MongoDB, Firebase",
      price: "Orçamento personalizado"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark-blue text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Nossos Serviços
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white-soft animate-fade-in">
              Soluções digitais que <span className="text-blue-light">transformam</span> negócios
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Desenvolvemos projetos sob medida com tecnologias modernas e foco total em resultados
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16 animate-fade-in`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-8">
                    <div className="mr-6 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white-soft">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-light text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white-soft mb-6">
                      ✨ O que está incluído:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-light mr-3 flex-shrink-0" />
                          <span className="text-gray-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white-soft mb-3">
                      🛠️ Tecnologias utilizadas:
                    </h3>
                    <p className="text-blue-light font-medium">{service.technologies}</p>
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-blue-light">{service.price}</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5511954802686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    💬 Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="flex-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                    <div className="text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="p-6 bg-slate-700/50 rounded-full">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white-soft mb-6">
                        {service.title}
                      </h3>
                      <div className="bg-slate-700/50 p-6 rounded-xl">
                        <p className="text-gray-light mb-6">
                          Pronto para começar seu projeto?
                        </p>
                        <a
                          href="https://wa.me/5511954802686"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 bg-white text-dark-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                        >
                          Falar Conosco
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
              Como trabalhamos
            </h2>
            <p className="text-xl text-gray-light">
              Nosso processo otimizado garante resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
              { step: "02", title: "Planejamento", desc: "Criamos estratégia e cronograma detalhado" },
              { step: "03", title: "Desenvolvimento", desc: "Codificamos com as melhores práticas" },
              { step: "04", title: "Entrega", desc: "Lançamos e oferecemos suporte contínuo" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-light mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white-soft mb-3">{item.title}</h3>
                <p className="text-gray-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-8">
            Vamos criar algo incrível juntos?
          </h2>
          <p className="text-xl text-gray-light mb-12 max-w-3xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e criar a solução digital perfeita para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              💬 WhatsApp: (11) 95480-2686
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
