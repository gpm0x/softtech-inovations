
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1320] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SoftTech <span className="text-blue-400">Inovations</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Soluções digitais sob medida para transformar sua ideia em realidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/softtechinovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5511954802686"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <p className="text-gray-300 mb-2">WhatsApp: (11) 95480-2686</p>
            <p className="text-gray-300">
              Estamos prontos para ouvir sua ideia.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 SoftTech Inovations. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
