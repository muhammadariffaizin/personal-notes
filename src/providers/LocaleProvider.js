import { useEffect, useState } from 'react';
import LanguageContext from '../contexts/language';
import PropTypes from 'prop-types';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  useEffect(() => {
    const savedLanguageState = localStorage.getItem('language') || null;
    if (savedLanguageState) {
      setLanguage(savedLanguageState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
