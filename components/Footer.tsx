
import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <footer className="pt-12 mt-12 border-t border-light-border dark:border-dark-border space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <p className="text-[12px] font-medium text-light-text-secondary dark:text-dark-text-secondary">
            &copy; {new Date().getFullYear()} Drawbridge
          </p>
          <p className="text-[11px] font-medium text-light-text-muted dark:text-dark-text-muted">
            Created for the modern builder.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            <FooterLink href="https://github.com/breschio/drawbridge" label="GitHub" />
            <FooterLink href="#" label="Privacy" />
            <FooterLink href="#" label="Changelog" />
          </div>

          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-light-surface-alt dark:hover:bg-dark-surface-alt transition-colors group border border-transparent hover:border-light-border dark:hover:border-dark-border"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              /* Custom Sun Icon */
              <svg className="w-5 h-5 text-dark-text-secondary group-hover:text-dark-text fill-current" viewBox="0 0 24 24">
                <polygon points="17 10 17 14 16 14 16 15 15 15 15 16 14 16 14 17 10 17 10 16 9 16 9 15 8 15 8 14 7 14 7 10 8 10 8 9 9 9 9 8 10 8 10 7 14 7 14 8 15 8 15 9 16 9 16 10 17 10"/>
                <path d="m21,11v-1h1v-1h1v-2h-3v-1h-2v-2h-1V1h-2v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-2v3h-1v2h-2v1H1v2h1v1h1v1h1v2h-1v1h-1v1h-1v2h3v1h2v2h1v3h2v-1h1v-1h1v-1h2v1h1v1h1v1h2v-3h1v-2h2v-1h3v-2h-1v-1h-1v-1h-1v-2h1Zm-3,4h-1v1h-1v1h-1v1h-6v-1h-1v-1h-1v-1h-1v-6h1v-1h1v-1h1v-1h6v1h1v1h1v1h1v6Z"/>
              </svg>
            ) : (
              /* Custom Moon Icon */
              <svg className="w-5 h-5 text-light-text-secondary group-hover:text-light-text fill-current" viewBox="0 0 24 24">
                <polygon points="22 17 22 19 21 19 21 20 20 20 20 21 18 21 18 22 16 22 16 23 10 23 10 22 8 22 8 21 6 21 6 20 5 20 5 19 4 19 4 17 3 17 3 15 2 15 2 9 3 9 3 7 4 7 4 5 5 5 5 4 6 4 6 3 8 3 8 2 10 2 10 1 15 1 15 2 13 2 13 3 11 3 11 4 10 4 10 6 9 6 9 8 8 8 8 12 9 12 9 14 10 14 10 16 11 16 11 17 13 17 13 18 15 18 15 19 19 19 19 18 21 18 21 17 22 17" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string, label: string }> = ({ href, label }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="text-[12px] font-medium text-light-text-muted dark:text-dark-text-muted hover:text-light-accent dark:hover:text-dark-accent transition-colors"
  >
    {label}
  </a>
);
