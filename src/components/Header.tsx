
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/services" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Sobre", path: "/about" },
    { name: "Contato", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-blue/95 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            SoftTech <span className="text-blue-300">Inovations</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? "text-blue-300" 
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-300 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark-blue px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-blue-50 hover:scale-105"
            >
              💬 Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-white/10 pt-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? "text-blue-300" 
                    : "text-white hover:text-blue-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-dark-blue px-6 py-3 rounded-xl font-semibold transition-colors duration-200 text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              💬 Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
