
import { useEffect, useState } from "react";

const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { 
          name: "HTML", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M4.5 2.5L6 21L12 22.5L18 21L19.5 2.5H4.5Z" fill="#E34F26"/>
              <path d="M12 5H16.5L16 8.5H12V11H15.5L14.5 17L12 17.5V15H9.5L9 11H12V8.5H7.5L7 5H12Z" fill="white"/>
            </svg>
          ),
          color: "from-orange-500 to-orange-600"
        },
        { 
          name: "CSS", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M4.5 2.5L6 21L12 22.5L18 21L19.5 2.5H4.5Z" fill="#1572B6"/>
              <path d="M12 5V22L16.5 20.5L17.5 6H12ZM15.5 9H9L9.5 12H15L14.5 16L12 16.5V19L17 17.5L17.5 9H15.5Z" fill="white"/>
            </svg>
          ),
          color: "from-blue-500 to-blue-600"
        },
        { 
          name: "JavaScript", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
              <path d="M16.5 16C16.5 17.5 15.5 18 14 18C12.5 18 11.5 17 11.5 15.5V11H13V15.5C13 16 13.2 16.5 14 16.5C14.8 16.5 15 16 15 15.5V6H16.5V16ZM9.5 16C9.5 17.5 8.5 18 7 18C5.5 18 4.5 17 4.5 15.5H6C6 16 6.2 16.5 7 16.5C7.8 16.5 8 16 8 15.5C8 14.5 7.5 14 6.5 13.5L5.5 13C4.5 12.5 4 11.5 4 10.5C4 9 5 8 6.5 8C8 8 9 9 9 10.5H7.5C7.5 10 7.3 9.5 6.5 9.5C5.7 9.5 5.5 10 5.5 10.5C5.5 11 6 11.5 6.5 12L7.5 12.5C8.5 13 9.5 14 9.5 15.5V16Z" fill="#000"/>
            </svg>
          ),
          color: "from-yellow-400 to-yellow-500"
        },
        { 
          name: "React", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
              <path d="M12 1C15.5 1 21 4 21 8C21 12 15.5 15 12 15C8.5 15 3 12 3 8C3 4 8.5 1 12 1Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
              <path d="M12 9C15.5 9 21 12 21 16C21 20 15.5 23 12 23C8.5 23 3 20 3 16C3 12 8.5 9 12 9Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
              <path d="M12 9C8.5 9 3 6 3 2C3 -2 8.5 -5 12 -5C15.5 -5 21 -2 21 2C21 6 15.5 9 12 9Z" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
            </svg>
          ),
          color: "from-cyan-400 to-cyan-500"
        },
        { 
          name: "Next.js", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#000"/>
              <path d="M9.5 8.5L14.5 15.5H13L8.5 9V15.5H7V8.5H9.5ZM15.5 8.5H17V15.5H15.5V10.5L11.5 15.5H10.5L15.5 9.5V8.5Z" fill="white"/>
            </svg>
          ),
          color: "from-gray-700 to-gray-800"
        },
        { 
          name: "TailwindCSS", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.78 9.21 12.35 9.79C13.46 10.93 14.73 12.33 17 12.33C19.67 12.33 21.33 11 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.22 8.79 16.65 8.21C15.54 7.07 14.27 5.67 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.78 15.21 7.35 15.79C8.46 16.93 9.73 18.33 12 18.33C14.67 18.33 16.33 17 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.22 14.79 11.65 14.21C10.54 13.07 9.27 11.67 7 12Z" fill="#06B6D4"/>
            </svg>
          ),
          color: "from-teal-400 to-teal-500"
        }
      ]
    },
    {
      category: "Design",
      technologies: [
        { 
          name: "Figma", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
              <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
              <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
              <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
              <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
            </svg>
          ),
          color: "from-purple-500 to-pink-500"
        }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { 
          name: "Firebase", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M5.8 14.5L8.2 4.5L10.8 9.5L5.8 14.5Z" fill="#FFA000"/>
              <path d="M15.9 11.4L13.7 2.6C13.6 2.2 13.1 2.1 12.8 2.4L5.8 14.5L12 20L15.9 11.4Z" fill="#F57C00"/>
              <path d="M12 20L18.1 14.5L16.8 6.8C16.7 6.3 16.1 6.2 15.9 6.6L12 20Z" fill="#FFCA28"/>
              <path d="M12 20L5.8 14.5L4.2 16.1C3.9 16.4 3.9 16.9 4.2 17.2L12 20Z" fill="#FFA000"/>
            </svg>
          ),
          color: "from-orange-400 to-yellow-500"
        },
        { 
          name: "MySQL", 
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M16.4 8.8C15.8 8.8 15.4 9.2 15.4 9.8V14.2C15.4 14.8 15.8 15.2 16.4 15.2H19.6C20.2 15.2 20.6 14.8 20.6 14.2V9.8C20.6 9.2 20.2 8.8 19.6 8.8H16.4ZM18 10V14H17V10H18ZM14 8.8C13.4 8.8 13 9.2 13 9.8V14.2C13 14.8 13.4 15.2 14 15.2C14.6 15.2 15 14.8 15 14.2V9.8C15 9.2 14.6 8.8 14 8.8ZM12 15.2C12.6 15.2 13 14.8 13 14.2V12.8H12V14H11V10H12V11.2H13V9.8C13 9.2 12.6 8.8 12 8.8H10C9.4 8.8 9 9.2 9 9.8V14.2C9 14.8 9.4 15.2 10 15.2H12Z" fill="#00758F"/>
              <path d="M7 8.8C6.4 8.8 6 9.2 6 9.8V14.2C6 14.8 6.4 15.2 7 15.2H8V17H9V15.2H10C10.6 15.2 11 14.8 11 14.2V12.8H9V14H7V10H9V9.8C9 9.2 8.6 8.8 8 8.8H7Z" fill="#F29111"/>
            </svg>
          ),
          color: "from-blue-600 to-orange-500"
        }
      ]
    }
  ];

  const allTechnologies = techCategories.flatMap(category => category.technologies);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === allTechnologies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [allTechnologies.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
            Tecnologias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white-soft mb-6">
            🧰 Nossa Stack Tecnológica
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Utilizamos as melhores tecnologias organizadas por funcionalidade
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-2xl font-bold text-blue-light mb-8">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-slate-600/50 transition-all duration-300 hover:-translate-y-2 border border-slate-600/50"
                  >
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white-soft group-hover:text-blue-light transition-colors">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel for all techs */}
        <div className="md:hidden mt-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {allTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-600/50">
                    <div className="flex justify-center mb-4">
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white-soft">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {allTechnologies.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;
