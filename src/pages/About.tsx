
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import { ArrowRight, Target, Eye, Heart, Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Excelência",
      description: "Buscamos sempre a perfeição em cada linha de código e pixel do design.",
      icon: <Award className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Inovação",
      description: "Utilizamos as tecnologias mais modernas para criar soluções únicas.",
      icon: <Target className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta em todas as etapas do projeto.",
      icon: <Eye className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Dedicação",
      description: "Focamos em entregar soluções que realmente impactem seu negócio.",
      icon: <Heart className="w-8 h-8 text-blue-light" />
    }
  ];

  const whyChooseUs = [
    {
      title: "Experiência Comprovada",
      description: "Mais de 3 anos desenvolvendo soluções digitais para diversos segmentos.",
      icon: <Award className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos as melhores e mais modernas tecnologias do mercado.",
      icon: <Target className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Suporte Completo",
      description: "Oferecemos suporte técnico contínuo após a entrega do projeto.",
      icon: <Shield className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Preços Justos",
      description: "Oferecemos o melhor custo-benefício do mercado sem comprometer a qualidade.",
      icon: <Users className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Prazos Respeitados",
      description: "Cumprimos rigorosamente os prazos acordados em nossos projetos.",
      icon: <Clock className="w-8 h-8 text-blue-light" />
    },
    {
      title: "Personalização Total",
      description: "Cada projeto é único e desenvolvido especificamente para suas necessidades.",
      icon: <Heart className="w-8 h-8 text-blue-light" />
    }
  ];

  const timeline = [
    { year: "2021", title: "Fundação", desc: "SoftTech Inovations é criada com foco em soluções digitais" },
    { year: "2022", title: "Crescimento", desc: "Primeiros 25 projetos entregues e equipe expandida" },
    { year: "2023", title: "Expansão", desc: "Atingimos 50+ clientes e diversificamos serviços" },
    { year: "2024", title: "Consolidação", desc: "75+ projetos entregues e reconhecimento no mercado" }
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark-blue text-white pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white-soft animate-fade-in">
              Conheça a <span className="text-blue-light">SoftTech Inovations</span>
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Uma jornada de paixão por tecnologia e resultados que transformam negócios
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História Expandida */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-8">
                  Nossa Jornada
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-light space-y-6">
                  <p className="text-lg leading-relaxed">
                    A <strong className="text-blue-light">SoftTech Inovations</strong> nasceu da paixão por tecnologia e do desejo de transformar ideias em realidade digital. Fundada em 2021, começamos com um propósito claro: democratizar o acesso a soluções digitais de qualidade para empresas de todos os tamanhos.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Ao longo dos anos, desenvolvemos mais de <strong className="text-blue-light">75 projetos</strong> para <strong className="text-blue-light">58 clientes</strong> diferentes, sempre mantendo nosso compromisso com a excelência e inovação. Cada projeto é uma oportunidade de aprender, crescer e superar expectativas.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Nossa equipe é formada por profissionais apaixonados por tecnologia, design e resultados. Acreditamos que a tecnologia deve ser uma ferramenta poderosa para impulsionar negócios e transformar vidas.
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                  alt="Equipe trabalhando em tecnologia"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-white-soft mb-4">Nosso Compromisso</h3>
                <p className="text-gray-light">
                  Transformar desafios complexos em soluções simples e eficazes, sempre com foco na experiência do usuário e nos resultados do cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
              Nossa Evolução
            </h2>
            <p className="text-xl text-gray-light">
              Cada ano marca uma conquista importante em nossa jornada
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <div className="text-2xl font-bold text-blue-light mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-white-soft mb-2">{item.title}</h3>
                      <p className="text-gray-light">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-dark-blue"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Missão */}
            <div className="text-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <Target className="w-16 h-16 text-blue-light mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white-soft mb-4">Nossa Missão</h3>
              <p className="text-gray-light leading-relaxed">
                Transformar ideias em soluções digitais inovadoras que impulsionem o crescimento e sucesso dos nossos clientes, utilizando tecnologia de ponta e design excepcional.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <Eye className="w-16 h-16 text-blue-light mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white-soft mb-4">Nossa Visão</h3>
              <p className="text-gray-light leading-relaxed">
                Ser reconhecida como a principal referência em desenvolvimento de soluções digitais personalizadas, sendo sinônimo de qualidade, inovação e confiabilidade no mercado.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <Heart className="w-16 h-16 text-blue-light mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white-soft mb-4">Nossos Valores</h3>
              <p className="text-gray-light leading-relaxed">
                Excelência, inovação, transparência e foco em resultados são os pilares que norteiam todas as nossas ações e decisões empresariais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Detalhados */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-16 text-center">
            Nossos Valores em Ação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-slate-700/50 rounded-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white-soft">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Por que escolher a SoftTech */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-16 text-center">
            Por que escolher a SoftTech?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="text-center bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-slate-700/50 rounded-full">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white-soft mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-light leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe Expandida */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-12 text-center">
            Nossa Equipe
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-light mb-8 leading-relaxed">
                  Nossa equipe é formada por profissionais altamente qualificados e apaixonados por tecnologia. Cada membro contribui com sua expertise única para entregar projetos excepcionais.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white-soft mb-3">
                      🎯 Nosso Diferencial
                    </h3>
                    <p className="text-gray-light">
                      Combinamos conhecimento técnico avançado com criatividade e foco em resultados, sempre buscando a solução mais eficiente para cada desafio.
                    </p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <h3 className="text-xl font-semibold text-white-soft mb-3">
                      🚀 Metodologia Ágil
                    </h3>
                    <p className="text-gray-light">
                      Utilizamos metodologias ágeis para garantir entregas rápidas e de qualidade, mantendo comunicação constante com nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Equipe de desenvolvimento"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-semibold text-white-soft mb-4">
                  Expertise Técnica
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-700/50 p-3 rounded">
                    <strong className="text-blue-light">Frontend:</strong>
                    <br />React, Vue.js, HTML5, CSS3
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded">
                    <strong className="text-blue-light">Backend:</strong>
                    <br />Node.js, Express, Laravel
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded">
                    <strong className="text-blue-light">Banco de Dados:</strong>
                    <br />MySQL, PostgreSQL, MongoDB
                  </div>
                  <div className="bg-slate-700/50 p-3 rounded">
                    <strong className="text-blue-light">Design:</strong>
                    <br />UI/UX, Figma, Adobe Creative
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-8">
            Pronto para trabalhar conosco?
          </h2>
          <p className="text-xl text-gray-light mb-12 max-w-3xl mx-auto">
            Vamos transformar sua ideia em uma solução digital incrível. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              💬 Falar no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
