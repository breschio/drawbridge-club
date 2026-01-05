
import React from 'react';
import drawbridgeOpBg from '../assets/media/drawbridge-op-bg.webm';

export const OPSection: React.FC = () => {
  return (
    <section className="relative">
      <style>{`
        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .shiny-text {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 6s linear infinite;
        }
        .dark .shiny-text {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      <div className="relative rounded-lg p-8 border border-light-border dark:border-dark-border space-y-6 text-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={drawbridgeOpBg} type="video/webm" />
        </video>
        
        {/* Content */}
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-[18px] font-semibold shiny-text">
              Drawbridge OP
            </h2>
            <p className="text-[14px] text-light-text-secondary dark:text-dark-text-secondary max-w-[400px] mx-auto leading-relaxed">
              Advanced editing tools and workflows.
            </p>
          </div>

          <div className="max-w-[320px] mx-auto space-y-3 pt-2">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border text-[14px] focus:outline-none focus:border-light-accent dark:focus:border-dark-accent transition-colors placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted"
            />
            <button className="w-full py-2.5 px-4 rounded bg-light-accent dark:bg-dark-accent text-white text-[14px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Sign up for Early Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          <p className="text-[11px] text-light-text-muted dark:text-dark-text-muted">
            Coming soon
          </p>
        </div>
      </div>
    </section>
  );
};
