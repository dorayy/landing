import React, { useState, FormEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Database, Code2, Cloud, BarChart3, Github, Linkedin, Mail, CheckCircle } from 'lucide-react';
import { projects } from './data';
import { translations } from './translations';
import { Language, Theme, ContactForm } from './types';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import { LanguageContext } from './contexts/LanguageContext';

function HomePage({ theme, language }: { theme: Theme; language: Language }) {
  const t = translations[language];
  const [formData, setFormData] = useState<ContactForm>({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ email: '', message: '' });
    } catch (err) {
      setError(t.contact.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t.hero.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.hero.cta}
            </a>
          </div>
          <div className="flex-1">
            <img
              src="man.png"
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.competencies.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 text-center">
              <Database className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">
                {t.competencies.dataEngineering.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.competencies.dataEngineering.description}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 text-center">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">
                {t.competencies.fullStack.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.competencies.fullStack.description}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 text-center">
              <Cloud className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">
                {t.competencies.cloud.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.competencies.cloud.description}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">
                {t.competencies.analytics.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t.competencies.analytics.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                learnMoreText={t.projects.learnMore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">{t.contact.title}</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            {t.contact.description}
          </p>
          {isSubmitted ? (
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <p className="text-xl font-semibold text-green-500">{t.contact.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-600 dark:text-gray-300">
        <p>{t.footer.copyright}</p>
      </footer>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={theme}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* Header */}
          <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-6 py-4 flex justify-end items-center gap-4">
              <LanguageToggle language={language} onLanguageChange={setLanguage} />
              <ThemeToggle theme={theme} onThemeChange={setTheme} />
            </div>
          </header>

          <Routes>
            <Route path="/" element={<HomePage theme={theme} language={language} />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;