
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Phone, Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve. Obrigado!",
        });
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Tente novamente ou entre em contato pelo WhatsApp.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "WhatsApp",
      value: "(11) 95480-2686",
      icon: <MessageCircle className="w-6 h-6" />,
      link: "https://wa.me/5511954802686",
      description: "Resposta em minutos"
    },
    {
      title: "Instagram",
      value: "@softtechinovations",
      icon: <Phone className="w-6 h-6" />,
      link: "https://www.instagram.com/softtechinovations/",
      description: "Acompanhe nossos projetos"
    },
    {
      title: "Email",
      value: "contato@softtech.com",
      icon: <Mail className="w-6 h-6" />,
      link: "mailto:contato@softtech.com",
      description: "Resposta em até 24h"
    }
  ];

  const services = [
    "Criação de Sites",
    "Landing Pages",
    "E-commerce",
    "Micro-SaaS",
    "Consultoria",
    "Outro"
  ];

  return (
    <div className="min-h-screen bg-dark-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-dark-blue text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white-soft animate-fade-in">
              Vamos <span className="text-blue-light">conversar</span> sobre seu projeto?
            </h1>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Estamos prontos para ouvir sua ideia e transformá-la em uma solução digital incrível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-soft mb-8">
                Conte-nos sobre seu projeto
              </h2>
              <p className="text-gray-light mb-8 text-lg">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível para discutir como podemos ajudar seu negócio.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-light mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-light mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-light mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-light mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-light mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-light mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white-soft placeholder-gray-400 resize-vertical"
                    placeholder="Conte-nos sobre seu projeto, suas necessidades e como podemos ajudá-lo..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-soft mb-8">
                Outras formas de contato
              </h2>
              <p className="text-gray-light mb-8 text-lg">
                Prefere entrar em contato diretamente? Escolha a forma que for mais conveniente para você.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-blue-light mr-4 p-3 bg-slate-700/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white-soft text-lg">{info.title}</h3>
                      <p className="text-blue-light font-medium">{info.value}</p>
                      <p className="text-sm text-gray-light">{info.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-light group-hover:text-blue-light group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>

              {/* WhatsApp Direct */}
              <div className="p-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/30 mb-12">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white-soft">
                    💬 WhatsApp Direto
                  </h3>
                </div>
                <p className="text-gray-light mb-6 text-lg">
                  Para atendimento mais rápido, chame no WhatsApp e receba uma resposta em minutos!
                </p>
                <a
                  href="https://wa.me/5511954802686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Abrir WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* FAQ Quick Links */}
              <div>
                <h3 className="text-2xl font-semibold text-white-soft mb-6">
                  ❓ Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      question: "Qual o prazo médio dos projetos?",
                      answer: "Varia de 2 a 10 semanas dependendo da complexidade"
                    },
                    {
                      question: "Vocês fazem manutenção?",
                      answer: "Sim! Oferecemos suporte contínuo após a entrega"
                    },
                    {
                      question: "Como funciona o orçamento?",
                      answer: "Orçamento gratuito e personalizado em até 24h"
                    },
                    {
                      question: "Trabalham com quais tecnologias?",
                      answer: "React, Node.js, Firebase, MySQL e muito mais"
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="font-medium text-white-soft mb-2 text-lg">
                        {faq.question}
                      </h4>
                      <p className="text-gray-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white-soft mb-12">
              Horário de Atendimento
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <Clock className="w-8 h-8 text-blue-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white-soft mb-2">Segunda a Sexta</h3>
                <p className="text-gray-light">09:00 às 18:00</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white-soft mb-2">WhatsApp</h3>
                <p className="text-gray-light">24 horas por dia</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <Mail className="w-8 h-8 text-blue-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white-soft mb-2">Email</h3>
                <p className="text-gray-light">Resposta em até 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-8">
            Sua próxima solução digital começa aqui
          </h2>
          <p className="text-xl text-gray-light mb-12 max-w-3xl mx-auto">
            Não deixe sua ideia esperando. Entre em contato agora e vamos começar a transformar seus sonhos digitais em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
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

export default Contact;
