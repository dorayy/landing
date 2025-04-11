import { Language } from '../types';

type Props = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function LanguageToggle({ language, onLanguageChange }: Props) {
  return (
    <button
      onClick={() => onLanguageChange(language === 'en' ? 'fr' : 'en')}
      className="px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}