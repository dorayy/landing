import { Moon, Sun } from 'lucide-react';
import { Theme } from '../types';

type Props = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

export default function ThemeToggle({ theme, onThemeChange }: Props) {
  return (
    <button
      onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}