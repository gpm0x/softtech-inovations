
import { useEffect, useState } from "react";

const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "WordPress", icon: "📝" },
    { name: "TailwindCSS", icon: "💨" },
    { name: "Next.js", icon: "▲" },
    { name: "Express", icon: "🚀" },
    { name: "Firebase", icon: "🔥" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1320] mb-4">
            🧰 Nossa Stack Tecnológica
          </h2>
          <p className="text-gray-600 text-lg">
            Utilizamos as melhores tecnologias para criar soluções digitais de alta qualidade
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {technologies.concat(technologies.slice(0, 4)).map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 w-1/4 px-4"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0b1320]">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h3 className="text-sm font-semibold text-[#0b1320]">{tech.name}</h3>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="hidden md:flex justify-center mt-8 space-x-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
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
