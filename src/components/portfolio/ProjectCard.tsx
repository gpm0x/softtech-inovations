
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
      className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-600/30 hover:border-blue-500/40"
      onClick={() => onClick(project)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30">
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
              className="text-xs bg-slate-600/30 text-slate-300 px-2 py-1 rounded border border-slate-500/30"
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
