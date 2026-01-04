
import React from 'react';
import drawbridgeIcon from '../assets/icons/drawbridge-icon-dark.svg';
import { useGithubStars } from '../hooks/useGithubStars';

export const Header: React.FC = () => {
  const { starCount, isLoading } = useGithubStars();

  return (
    <header className="flex items-center justify-between border-b border-light-border dark:border-dark-border pb-4">
      <div className="flex items-end gap-2">
        <img
          src={drawbridgeIcon}
          alt="Drawbridge"
          className="w-[24px] h-[24px] mb-[8px]"
        />
        <span className="text-[20px] font-semibold tracking-tight">Drawbridge</span>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href="https://github.com/breschio/drawbridge"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:border-light-accent/40 dark:hover:border-dark-accent/40 transition-all group"
        >
          <span className="text-[11px] font-medium uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-text dark:group-hover:text-dark-text transition-colors">
            Star on github
          </span>
          {isLoading ? (
            <span className="text-[11px] text-light-text-muted dark:text-dark-text-muted">…</span>
          ) : starCount !== null ? (
            <span className="px-1.5 py-0.5 rounded bg-light-bg dark:bg-dark-bg text-[11px] inline-flex items-center gap-1">
              <span className="text-light-warning dark:text-dark-warning">★</span>
              <span className="text-light-text-muted dark:text-dark-text-muted">
                {starCount.toLocaleString()}
              </span>
            </span>
          ) : (
            <span className="px-1.5 py-0.5 rounded bg-light-bg dark:bg-dark-bg text-[11px] inline-flex items-center gap-1">
              <span className="text-light-warning dark:text-dark-warning">★</span>
              <span className="text-light-text-muted dark:text-dark-text-muted">—</span>
            </span>
          )}
        </a>
        <button className="hidden px-3 py-1.5 rounded bg-light-accent dark:bg-dark-accent text-white text-[11px] font-medium uppercase tracking-wider border border-light-accent/30 dark:border-dark-accent/30 hover:border-light-accent dark:hover:border-dark-accent transition-all">
          Add to Chrome
        </button>
      </div>
    </header>
  );
};
