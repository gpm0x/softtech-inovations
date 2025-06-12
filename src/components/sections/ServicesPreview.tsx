
import { Link } from "react-router-dom";
import { CheckCircle, Code, Target, Shield, Rocket } from "lucide-react";

const ServicesPreview = () => {
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

  return (
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
  );
};

export default ServicesPreview;
