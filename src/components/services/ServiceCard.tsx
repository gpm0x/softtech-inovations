
import { CheckCircle, ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  technologies: string;
  price: string;
  index: number;
}

const ServiceCard = ({ title, icon, description, benefits, technologies, price, index }: ServiceCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center gap-16 animate-fade-in`}
    >
      <div className="flex-1">
        <div className="flex items-center mb-8">
          <div className="mr-6 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white-soft">
            {title}
          </h2>
        </div>
        
        <p className="text-gray-light text-lg mb-8 leading-relaxed">
          {description}
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white-soft mb-6">
            ✨ O que está incluído:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, benefitIndex) => (
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
          <p className="text-blue-light font-medium">{technologies}</p>
          <div className="mt-4">
            <span className="text-2xl font-bold text-blue-light">{price}</span>
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
                {icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white-soft mb-6">
              {title}
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
  );
};

export default ServiceCard;
