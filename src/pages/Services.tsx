
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Criação de Sites Profissionais",
      icon: "🌐",
      description: "Desenvolvemos sites responsivos, modernos e otimizados para SEO que transmitem credibilidade e convertem visitantes em clientes.",
      benefits: [
        "Design responsivo para todos os dispositivos",
        "Otimização para mecanismos de busca (SEO)",
        "Carregamento rápido e performance otimizada",
        "Integração com redes sociais",
        "Sistema de gerenciamento de conteúdo",
        "Suporte técnico completo"
      ],
      technologies: "HTML, CSS, JavaScript, React, WordPress"
    },
    {
      title: "Páginas de Vendas (Landing Pages)",
      icon: "📈",
      description: "Landing pages estratégicas e persuasivas, criadas para maximizar suas conversões e gerar mais leads qualificados para seu negócio.",
      benefits: [
        "Design focado em conversão",
        "Copywriting persuasivo",
        "Formulários otimizados",
        "Integração com ferramentas de marketing",
        "Testes A/B para melhor performance",
        "Analytics e relatórios detalhados"
      ],
      technologies: "HTML, CSS, JavaScript, React, Next.js"
    },
    {
      title: "Lojas Virtuais (E-commerce)",
      icon: "🛒",
      description: "E-commerce completo com sistema de pagamento seguro, gestão de estoque e painel administrativo para vender online com confiança.",
      benefits: [
        "Sistema de pagamento integrado",
        "Gestão completa de produtos",
        "Controle de estoque automático",
        "Painel administrativo intuitivo",
        "Múltiplas formas de pagamento",
        "Certificado SSL incluído"
      ],
      technologies: "React, Node.js, PostgreSQL, Stripe, PayPal"
    },
    {
      title: "Desenvolvimento de Micro-SaaS",
      icon: "⚙️",
      description: "Sistemas web personalizados para automatizar processos do seu negócio, aumentar produtividade e reduzir custos operacionais.",
      benefits: [
        "Automação de processos",
        "Interface intuitiva e moderna",
        "Banco de dados seguro",
        "API's customizadas",
        "Dashboard com métricas",
        "Escalabilidade garantida"
      ],
      technologies: "React, Node.js, Express, MongoDB, Firebase"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#0b1320] text-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-blue-400">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300">
              Soluções digitais completas para impulsionar seu negócio online
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{service.icon}</span>
                    <h2 className="text-3xl font-bold text-[#0b1320]">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-[#0b1320] mb-4">
                      Benefícios Inclusos:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#0b1320] mb-2">
                      Tecnologias:
                    </h3>
                    <p className="text-blue-600 font-medium">{service.technologies}</p>
                  </div>

                  <a
                    href="https://wa.me/5511954802686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                  >
                    💬 Fale com a SoftTech
                  </a>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-lg">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-[#0b1320] mb-4">
                        {service.title}
                      </h3>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">
                          Pronto para começar seu projeto?
                        </p>
                        <a
                          href="https://wa.me/5511954802686"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#0b1320] text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
                        >
                          Solicitar Orçamento
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

      {/* Final CTA */}
      <section className="py-16 bg-[#0b1320] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha a solução ideal e receba um orçamento personalizado agora
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e criar a solução digital perfeita para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
            >
              💬 WhatsApp: (11) 95480-2686
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
