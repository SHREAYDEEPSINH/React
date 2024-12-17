import React, { createContext, useContext, useState } from 'react';

// Create the ThemeContext
const ThemeContext = createContext(); // Must match this name during usage

// Create the Provider Component
export const ThemeProvider = ({ children }) => {
  const themes = ['green', 'red', 'yellow']; // Array of theme options
  const [theme, setTheme] = useState(themes[0]); // Default to 'light'

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]); // Cycle to the next theme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context; // Return the theme context
};
