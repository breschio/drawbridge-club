
import React from 'react';

export const InstallSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-[18px] font-semibold border-b border-light-border dark:border-dark-border pb-2">
        How to Install
      </h2>
      <div className="space-y-6">
        <InstallStep 
          number="1" 
          title="Download Source" 
          description="Clone the repository from GitHub or download the source zip from the latest release." 
        />
        <InstallStep 
          number="2" 
          title="Enable Developer Mode" 
          description="Navigate to chrome://extensions in your browser and toggle 'Developer Mode' on." 
        />
        <InstallStep 
          number="3" 
          title="Load Extension" 
          description="Click 'Load Unpacked' and select the Drawbridge directory to start bridging." 
        />
      </div>

      <div className="bg-light-surface dark:bg-dark-surface rounded-lg p-4 border border-light-border dark:border-dark-border">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-medium text-light-text-muted dark:text-dark-text-muted font-mono">CLI Quickstart</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-light-error opacity-40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-light-warning opacity-40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-light-success opacity-40"></div>
          </div>
        </div>
        <code className="block text-[13px] font-mono text-light-text dark:text-dark-text leading-relaxed">
          <span className="text-light-accent dark:text-dark-accent">$</span> git clone <span className="opacity-70">breschio/drawbridge</span><br/>
          <span className="text-light-accent dark:text-dark-accent">$</span> cd drawbridge && npm install
        </code>
      </div>
    </section>
  );
};

const InstallStep: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-none w-6 h-6 rounded-full bg-light-surface-alt dark:bg-dark-surface-alt flex items-center justify-center text-[12px] font-bold text-light-text-muted dark:text-dark-text-muted">
      {number}
    </div>
    <div className="space-y-1">
      <h4 className="text-[14px] font-semibold">{title}</h4>
      <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary leading-snug">
        {description}
      </p>
    </div>
  </div>
);
