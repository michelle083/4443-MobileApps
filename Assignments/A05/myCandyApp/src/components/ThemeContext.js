// // ThemeContext.js
// import React, { createContext, useState } from 'react';

// export default {
//   light: {
//     background: '#fff',
//     text: '#000',
//   },
//   dark: {
//     background: '#000',
//     text: '#fff',
//   },
// };

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
