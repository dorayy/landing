import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data';
import { translations } from '../translations';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function ProjectDetail() {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-2xl font-bold mb-4">{t.projects.notFound}</h1>
        <Link 
          to="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.projects.backToHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <Link 
        to="/" 
        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {t.projects.backToHome}
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">{t.projects.overview}</h2>
            <p className="mb-4">{t.projects.overviewText}</p>
            
            <h2 className="text-2xl font-semibold mb-4">{t.projects.features}</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">{t.projects.featuresList.scalability}</li>
              <li className="mb-2">{t.projects.featuresList.monitoring}</li>
              <li className="mb-2">{t.projects.featuresList.deployment}</li>
              <li className="mb-2">{t.projects.featuresList.documentation}</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">{t.projects.technical}</h2>
            <p>{t.projects.technicalText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}