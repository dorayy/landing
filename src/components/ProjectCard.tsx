import { Link } from 'react-router-dom';
import { Project } from '../types';

type Props = {
  project: Project;
  learnMoreText: string;
};

export default function ProjectCard({ project, learnMoreText }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/project/${project.id}`}
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          {learnMoreText} →
        </Link>
      </div>
    </div>
  );
}