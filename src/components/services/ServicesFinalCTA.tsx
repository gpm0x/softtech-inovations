
import { ArrowRight } from "lucide-react";

const ServicesFinalCTA = () => {
  return (
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
  );
};

export default ServicesFinalCTA;
