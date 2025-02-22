import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import translation from '../store/translation.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Por defecto en inglés

  const toggleLanguage = (lang) => {
    if (lang) {
      // Si se proporciona un idioma específico
      if (lang === "es" || lang === "en") {
        setLanguage(lang);
      } else {
        console.warn(`Idioma no soportado: ${lang}`);
      }
    } else {
      // Si no se proporciona idioma, alternar entre es y en
      setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
    }
  };

  return (
    <LanguageContext.Provider value={{ translation: translation[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};
