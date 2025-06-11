
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511954802686", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default FloatingWhatsApp;
