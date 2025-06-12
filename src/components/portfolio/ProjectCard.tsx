
interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  developmentTime: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-sm text-gray-500">{project.developmentTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-[#0b1320] mb-2">
          {project.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-400">
              +{project.technologies.length - 3} mais
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
