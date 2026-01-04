
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Zero Config',
    description: 'Install and start bridging instantly. No complex environment variables needed.'
  },
  {
    title: 'Privacy Centric',
    description: 'Drawbridge processes data locally. We never see your code or your browsing history.'
  },
  {
    title: 'Lightweight',
    description: 'Designed to be tiny, minimal, and out of your way. Your RAM will thank you.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-[18px] font-semibold border-b border-light-border dark:border-dark-border pb-2">
        Core Pillars
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURE_LIST.map((feature, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-[16px] font-semibold text-light-accent dark:text-dark-accent">
              {feature.title}
            </h3>
            <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary leading-snug">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-light-surface dark:bg-dark-surface rounded-lg p-4 border border-light-border dark:border-dark-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-medium text-light-text-muted dark:text-dark-text-muted">Usage Example</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-light-error opacity-40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-light-warning opacity-40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-light-success opacity-40"></div>
          </div>
        </div>
        <code className="block text-[13px] font-mono text-light-text dark:text-dark-text leading-relaxed">
          <span className="text-light-accent dark:text-dark-accent">$</span> drawbridge connect <span className="opacity-50">--port 3000</span><br/>
          <span className="text-status-done">✔</span> Bridge established at localhost:3000
        </code>
      </div>
    </section>
  );
};
