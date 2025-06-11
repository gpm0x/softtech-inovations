
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-6 inline-block">
              SoftTech <span className="text-blue-300">Inovations</span>
            </Link>
            <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
              Soluções digitais sob medida para transformar sua ideia em realidade. 
              Especializados em desenvolvimento web, e-commerce e sistemas personalizados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/softtechinovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511954802686"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-200">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-100 hover:text-blue-300 transition-colors duration-200 flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-blue-300 transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-blue-100 hover:text-blue-300 transition-colors duration-200">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-blue-300 transition-colors duration-200">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-blue-300 transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-200">Contato</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5511954802686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-100 hover:text-blue-300 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                (11) 95480-2686
              </a>
              <p className="text-blue-100 text-sm leading-relaxed">
                Estamos prontos para ouvir sua ideia e transformá-la em realidade digital.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2024 SoftTech Inovations. Todos os direitos reservados.
            </p>
            <p className="text-blue-100 text-sm mt-4 md:mt-0">
              Desenvolvido com ❤️ pela SoftTech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
