
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      title: "WhatsApp",
      value: "(11) 95480-2686",
      icon: "📱",
      link: "https://wa.me/5511954802686"
    },
    {
      title: "Instagram",
      value: "@softtechinovations",
      icon: "📸",
      link: "https://www.instagram.com/softtechinovations/"
    },
    {
      title: "Email",
      value: "contato@softtech.com",
      icon: "📧",
      link: "mailto:contato@softtech.com"
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
              Entre em <span className="text-blue-400">Contato</span>
            </h1>
            <p className="text-xl text-gray-300">
              Estamos prontos para ouvir sua ideia. Fale agora com a SoftTech.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#0b1320] mb-6">
                Envie sua mensagem
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível para discutir seu projeto.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Conte-nos sobre seu projeto, suas necessidades e como podemos ajudá-lo..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0b1320] text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0b1320] mb-6">
                Outras formas de contato
              </h2>
              <p className="text-gray-600 mb-8">
                Prefere entrar em contato diretamente? Escolha a forma que for mais conveniente para você.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="text-3xl mr-4">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-[#0b1320]">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Direct */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  💬 WhatsApp Direto
                </h3>
                <p className="text-green-700 mb-4">
                  Para atendimento mais rápido, chame no WhatsApp e receba uma resposta em minutos!
                </p>
                <a
                  href="https://wa.me/5511954802686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
                >
                  Abrir WhatsApp
                </a>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#0b1320] mb-4">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-[#0b1320] mb-1">
                      Qual o prazo médio dos projetos?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Varia de 2 a 10 semanas dependendo da complexidade
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-[#0b1320] mb-1">
                      Vocês fazem manutenção?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Sim! Oferecemos suporte contínuo após a entrega
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-[#0b1320] mb-1">
                      Como funciona o orçamento?
                    </h4>
                    <p className="text-sm text-gray-600">
                      Orçamento gratuito e personalizado em até 24h
                    </p>
                  </div>
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
            Sua próxima solução digital começa com uma mensagem
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Não deixe sua ideia esperando. Entre em contato agora e vamos começar a transformar seus sonhos digitais em realidade.
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

export default Contact;
