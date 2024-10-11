import React from 'react';
import { useRecoilState } from 'recoil';
import { languageState } from '../../recoil/languageState';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <div>
      <button onClick={toggleLanguage} className="mr-2 p-2 text-xs">
        {language === 'ar' ? 'en' : 'ar'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
