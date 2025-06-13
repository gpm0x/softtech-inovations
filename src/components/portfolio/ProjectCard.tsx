
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

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div
      className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-purple-500/20 hover:border-purple-400/40"
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/30">
            {project.category}
          </span>
          <span className="text-sm text-gray-400">{project.developmentTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded border border-indigo-400/30"
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
