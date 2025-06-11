
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";

const About = () => {
  const values = [
    {
      title: "Excelência",
      description: "Buscamos sempre a perfeição em cada linha de código e pixel do design.",
      icon: "🏆"
    },
    {
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas para criar soluções únicas.",
      icon: "💡"
    },
    {
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta em todas as etapas do projeto.",
      icon: "🤝"
    },
    {
      title: "Resultados",
      description: "Focamos em entregar soluções que realmente impactem seu negócio.",
      icon: "📈"
    }
  ];

  const whyChooseUs = [
    {
      title: "Experiência Comprovada",
      description: "Mais de 3 anos desenvolvendo soluções digitais para diversos segmentos.",
      icon: "⭐"
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos as melhores e mais modernas tecnologias do mercado.",
      icon: "🚀"
    },
    {
      title: "Suporte Completo",
      description: "Oferecemos suporte técnico contínuo após a entrega do projeto.",
      icon: "🛠️"
    },
    {
      title: "Preços Justos",
      description: "Oferecemos o melhor custo-benefício do mercado sem comprometer a qualidade.",
      icon: "💰"
    },
    {
      title: "Prazos Respeitados",
      description: "Cumprimos rigorosamente os prazos acordados em nossos projetos.",
      icon: "⏰"
    },
    {
      title: "Personalização Total",
      description: "Cada projeto é único e desenvolvido especificamente para suas necessidades.",
      icon: "🎨"
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
              Sobre a <span className="text-blue-400">SoftTech Inovations</span>
            </h1>
            <p className="text-xl text-gray-300">
              Conheça nossa história, missão e os valores que nos guiam
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-8 text-center">
              Nossa História
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                A <strong>SoftTech Inovations</strong> nasceu da paixão por tecnologia e do desejo de transformar ideias em realidade digital. Fundada em 2021, começamos com um propósito claro: democratizar o acesso a soluções digitais de qualidade para empresas de todos os tamanhos.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Ao longo dos anos, desenvolvemos mais de <strong>75 projetos</strong> para <strong>58 clientes</strong> diferentes, sempre mantendo nosso compromisso com a excelência e inovação. Cada projeto é uma oportunidade de aprender, crescer e superar expectativas.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nossa equipe é formada por profissionais apaixonados por tecnologia, design e resultados. Acreditamos que a tecnologia deve ser uma ferramenta poderosa para impulsionar negócios e transformar vidas.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, somos reconhecidos pela qualidade dos nossos serviços, pontualidade nas entregas e, principalmente, pelo relacionamento próximo e transparente que mantemos com nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Missão */}
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#0b1320] mb-4">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformar ideias em soluções digitais inovadoras que impulsionem o crescimento e sucesso dos nossos clientes, utilizando tecnologia de ponta e design excepcional.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-[#0b1320] mb-4">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a principal referência em desenvolvimento de soluções digitais personalizadas, sendo sinônimo de qualidade, inovação e confiabilidade no mercado.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-[#0b1320] mb-4">Nossos Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Excelência, inovação, transparência e foco em resultados são os pilares que norteiam todas as nossas ações e decisões empresariais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-12 text-center">
            Nossos Valores em Detalhes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{value.icon}</span>
                  <h3 className="text-xl font-semibold text-[#0b1320]">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Por que escolher a SoftTech */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-12 text-center">
            Por que escolher a SoftTech?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-[#0b1320] mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-8 text-center">
            Nossa Equipe
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe é formada por profissionais altamente qualificados e apaixonados por tecnologia. Cada membro contribui com sua expertise única para entregar projetos excepcionais.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#0b1320] mb-4">
                Expertise Técnica
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <strong>Frontend:</strong>
                  <br />React, Vue.js, HTML5, CSS3
                </div>
                <div>
                  <strong>Backend:</strong>
                  <br />Node.js, Express, Laravel
                </div>
                <div>
                  <strong>Banco de Dados:</strong>
                  <br />MySQL, PostgreSQL, MongoDB
                </div>
                <div>
                  <strong>Design:</strong>
                  <br />UI/UX, Figma, Adobe Creative
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#0b1320] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para trabalhar conosco?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Vamos transformar sua ideia em uma solução digital incrível. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
