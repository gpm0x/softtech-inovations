
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceHero from "@/components/services/ServiceHero";
import ServicesProcessSection from "@/components/services/ServicesProcessSection";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import { Code, Palette, ShoppingCart, Settings } from "lucide-react";

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
      
      <ServiceHero />

      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                benefits={service.benefits}
                technologies={service.technologies}
                price={service.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ServicesProcessSection />
      <ServicesFinalCTA />

      <Footer />
    </div>
  );
};

export default Services;
