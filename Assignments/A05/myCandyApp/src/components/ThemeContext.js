// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // default theme is 'light'
  const [accentColor, setAccentColor] = useState('blue');

  const themeStyles = {
    light: {
      background: '#fff',
      text: '#000',
      accent: accentColor,
    },
    dark: {
      background: '#000000',
      text: '#fff',
      accent: accentColor,
    },
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: themeStyles[theme], toggleTheme, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};