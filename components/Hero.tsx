
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="space-y-8">
      {/* Video Showcase Section */}
      <div className="relative aspect-video w-full rounded-lg bg-light-surface-alt dark:bg-dark-surface-alt border border-light-border dark:border-dark-border overflow-hidden group transition-all hover:border-light-accent/50 dark:hover:border-dark-accent/50">
          <img 
            src="https://github.com/breschio/drawbridge-media/raw/main/drawbridge.gif"
            alt="Drawbridge Demo"
            className="w-full h-full object-cover"
          />
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-[20px] font-semibold text-light-text dark:text-dark-text tracking-tight">
            Click. Comment. Code.
          </h1>
          <div className="space-y-2 max-w-[520px]">
            <div className="flex items-start gap-3">
              <div className="flex-none w-6 h-6 rounded-full bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text text-[12px] font-semibold flex items-center justify-center">
                1
              </div>
              <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary leading-relaxed pt-0.5">
                Select an element in your browser
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none w-6 h-6 rounded-full bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text text-[12px] font-semibold flex items-center justify-center">
                2
              </div>
              <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary leading-relaxed pt-0.5">
                Describe what you want to change
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none w-6 h-6 rounded-full bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text text-[12px] font-semibold flex items-center justify-center">
                3
              </div>
              <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary leading-relaxed pt-0.5">
                Batch multiple fixes into one prompt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
