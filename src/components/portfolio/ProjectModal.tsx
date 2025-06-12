
interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  objective: string;
  technologies: string[];
  developmentTime: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-[#0b1320]">
              {project.name}
            </h2>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Descrição do Projeto</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>

              <h3 className="text-xl font-semibold mb-3">Objetivo</h3>
              <p className="text-gray-600 mb-6">{project.objective}</p>

              <h3 className="text-xl font-semibold mb-3">Tempo de Desenvolvimento</h3>
              <p className="text-gray-600">{project.developmentTime}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Tecnologias Utilizadas</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">Funcionalidades</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5511954802686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block"
            >
              💬 Quero um projeto assim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
