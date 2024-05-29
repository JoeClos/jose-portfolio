import React, { useEffect, useState } from 'react';
import { DarkModeContext } from '../DarkModeContext/DarkModeContext';

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
