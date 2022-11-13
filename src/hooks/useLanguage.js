import LanguageContext from '../contexts/language';
import { useContext } from 'react';

const useLanguage = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const toggleLanguage = () => {
    setLanguage((prevState) => (prevState === 'id' ? 'en' : 'id'));
  };
  return { language, setLanguage, toggleLanguage };
};

export default useLanguage;
