import React, { useEffect, useState } from 'react';
import translations from '../public/Translation/Translation';
import { languageState } from '../recoil/languageState';
import { useRecoilState } from 'recoil';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Main = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, [setLanguage]);

  if (!isClient) {
    return null;
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  const handleWhatsAppClick = () => {
    const phoneNumber = "+966555450376";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div
      dir={dir}
      id='home'
      className='w-full h-screen text-center bg-[url("/assets/img/Rack.jpg")] bg-cover bg-center bg-no-repeat'
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='w-auto bg-gray-500 bg-opacity-40 rounded-xl px-4'>
          {/* إضافة الأنيميشن للكلمات */}
          <Fade cascade>
            <h2 className='py-4 text-white'>
              {translations[language].welcome} <span className='text-[#e8c83e]'>{translations[language].website}</span>
            </h2>
            <h1 className='py-2 text-white'>{translations[language].comfort}</h1>
            <p className='py-4 text-white sm:max-w-[70%] m-auto'>
              {translations[language].flooring}
            </p>
          </Fade>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            {/* social links */}
            <div
              className='rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp />
            </div>
            <a
              href='https://www.facebook.com/tismpro/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a>
            <a
              href='https://www.instagram.com/tismpro_/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/tismpro/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedin />
              </div>
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#090708" fillOpacity="1" d="M0,128L60,112C120,96,240,64,360,48C480,32,600,32,720,42.7C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
  );
};

export default Main;
