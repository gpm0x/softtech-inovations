
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual da SoftTech. Como posso ajudá-lo hoje?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickResponses = [
    "Quero fazer um orçamento",
    "Como funciona o processo?",
    "Quais tecnologias vocês usam?",
    "Tempo de entrega dos projetos"
  ];

  const handleSendMessage = (message?: string) => {
    const messageText = message || inputMessage.trim();
    if (!messageText) return;

    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: "user" as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simular resposta do bot
    setTimeout(() => {
      let botResponse = "";
      
      if (messageText.toLowerCase().includes("orçamento")) {
        botResponse = "Perfeito! Para um orçamento personalizado, vou te redirecionar para nosso WhatsApp onde nossa equipe pode entender melhor suas necessidades. 📱";
      } else if (messageText.toLowerCase().includes("processo")) {
        botResponse = "Nosso processo é dividido em 4 etapas: Briefing, Planejamento, Desenvolvimento e Entrega. Cada projeto é acompanhado de perto! 🚀";
      } else if (messageText.toLowerCase().includes("tecnologia")) {
        botResponse = "Usamos tecnologias modernas como React, Node.js, Next.js, Firebase, MySQL e muito mais! Sempre escolhemos a melhor stack para cada projeto. 💻";
      } else if (messageText.toLowerCase().includes("tempo")) {
        botResponse = "O tempo varia conforme a complexidade: Sites simples (2-3 semanas), E-commerce (4-6 semanas), SaaS (6-10 semanas). Sempre cumprimos os prazos! ⏱️";
      } else {
        botResponse = "Entendi! Para uma resposta mais detalhada sobre seu caso específico, que tal conversarmos no WhatsApp? Nossa equipe está pronta para ajudar! 😊";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot" as const,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const redirectToWhatsApp = () => {
    window.open("https://wa.me/5511954802686", "_blank");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? "bg-red-500 hover:bg-red-600 rotate-180" 
            : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 hover:scale-110"
        }`}
        aria-label="Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-slate-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-700/50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Assistente SoftTech</h3>
                <p className="text-blue-100 text-xs">Online agora</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-md"
                      : "bg-slate-800 text-slate-200 rounded-tl-md border border-slate-700/50"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-slate-400 mb-2">Respostas rápidas:</p>
              <div className="flex flex-wrap gap-1">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(response)}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded-lg border border-slate-700/50 transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-700/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-slate-800 border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white p-2 rounded-lg transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={redirectToWhatsApp}
              className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white text-xs py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              💬 Continuar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
