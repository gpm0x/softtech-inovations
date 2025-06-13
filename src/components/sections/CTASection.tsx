
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-medium mb-6 text-purple-300">
            Pronto para começar?
          </span>
          <h2 className="heading-lg mb-8 text-white animate-slide-up">
            Vamos transformar sua <span className="gradient-text">ideia em realidade</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-3"
            >
              💬 Fale Conosco no WhatsApp
            </a>
            <a
              href="mailto:contato@softtech.com"
              className="bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              📧 Enviar Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
