import React from 'react';

export const DarkModeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {
    // Implement the logic for toggling dark mode here
  },
});
