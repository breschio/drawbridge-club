
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center selection:bg-light-accent selection:text-white dark:selection:bg-dark-accent">
      <div className="w-full max-w-[640px] px-6 pt-6 pb-12 md:pt-12 md:pb-24 flex flex-col">
        <div className="space-y-4 flex flex-col">
          <Header />
          
          <main className="space-y-24">
            <Hero />
          </main>
        </div>

        <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default App;
