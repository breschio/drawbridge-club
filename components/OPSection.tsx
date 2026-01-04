
import React from 'react';

export const OPSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="bg-light-surface dark:bg-dark-surface rounded-lg p-8 border border-light-border dark:border-dark-border space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-[18px] font-semibold text-light-text dark:text-dark-text">
            Drawbridge OP
          </h2>
          <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary max-w-[400px] mx-auto leading-relaxed">
            The professional-grade bridge for high-stakes local development.
          </p>
        </div>

        <div className="max-w-[320px] mx-auto space-y-3 pt-2">
          <input 
            type="email" 
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-[14px] focus:outline-none focus:border-light-accent dark:focus:border-dark-accent transition-colors placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted"
          />
          <button className="w-full py-2.5 px-4 rounded bg-light-text dark:bg-dark-text text-light-bg dark:text-dark-bg text-[14px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Sign up for Early Access
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <p className="text-[11px] text-light-text-muted dark:text-dark-text-muted">
          Coming soon. Founding members get lifetime priority support.
        </p>
      </div>
    </section>
  );
};
