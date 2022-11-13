import { useEffect, useState } from 'react';
import ColorSchemeContext from '../contexts/colorScheme';
import PropTypes from 'prop-types';

const ColorSchemeProvider = ({ children }) => {
  const getInitialColorScheme = () => {
    if (typeof window !== 'undefined') {
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }
    return 'light';
  };
  const [colorScheme, setColorScheme] = useState(getInitialColorScheme());

  const rawSetColorScheme = (rawColorScheme) => {
    const root = window.document.documentElement;

    const isDark = rawColorScheme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawColorScheme);

    localStorage.setItem('color-scheme', rawColorScheme);
  };

  useEffect(() => {
    const savedColorSchemeState = localStorage.getItem('colorScheme') || null;
    if (savedColorSchemeState) {
      setColorScheme(savedColorSchemeState);
    }
  }, []);

  useEffect(() => {
    rawSetColorScheme(colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    localStorage.setItem('colorScheme', colorScheme);
  }, [colorScheme]);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

ColorSchemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColorSchemeProvider;
