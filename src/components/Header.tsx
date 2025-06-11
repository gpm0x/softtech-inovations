
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
    <header className="fixed top-0 left-0 right-0 bg-[#0b1320] text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            SoftTech <span className="text-blue-400">Inovations</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-blue-400 transition-colors duration-200 ${
                  isActive(item.path) ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/5511954802686"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 hover:text-blue-400 transition-colors duration-200 ${
                  isActive(item.path) ? "text-blue-400" : ""
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
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
