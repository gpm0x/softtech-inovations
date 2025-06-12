
import { Star } from "lucide-react";

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
