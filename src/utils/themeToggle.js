import React from 'react';
import { ThemeContext } from './themeContext';
import { FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function isDark() {
    return theme === 'dark';
  }

  return (
    <div
      className="text-secondary hover:opacity-75 text-xl umami--click--header-themeToggle-icon"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
    >
      <FaMoon />
    </div>
  );
};
