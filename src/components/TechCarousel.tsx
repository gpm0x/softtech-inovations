
import { useEffect, useState } from "react";

const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { name: "HTML", icon: "🌐", color: "from-orange-400 to-orange-600" },
    { name: "CSS", icon: "🎨", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "WordPress", icon: "📝", color: "from-blue-500 to-blue-700" },
    { name: "TailwindCSS", icon: "💨", color: "from-teal-400 to-teal-600" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
    { name: "Express", icon: "🚀", color: "from-gray-600 to-gray-800" },
    { name: "Firebase", icon: "🔥", color: "from-orange-500 to-red-600" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Tecnologias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            🧰 Nossa Stack Tecnológica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as melhores tecnologias para criar soluções digitais de alta qualidade
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {technologies.concat(technologies.slice(0, 4)).map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 w-1/4 px-4"
              >
                <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition-colors">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center text-xl mx-auto mb-3`}>
                {tech.icon}
              </div>
              <h3 className="text-sm font-bold text-blue-900">{tech.name}</h3>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="hidden md:flex justify-center mt-12 space-x-3">
          {technologies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 scale-125" : "bg-blue-300 hover:bg-blue-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;
