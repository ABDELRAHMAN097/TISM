import React, { useEffect, useState } from "react";
import translations from "../public/Translation/Translation";
import { languageState } from "../recoil/languageState";
import { useRecoilState } from "recoil";
import Image from 'next/image';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import decor from '../public/assets/img/decor.png'
import Additive from '../public/assets/img/Additive 1).jpg'
import Wood  from '../public/assets/img/STABLE STYLE.jpg'
import SandWithFiber  from '../public/assets/img/BarnPros.jpg'
import Rubber  from '../public/assets/img/Straight.jpg'
import StallRubber  from '../public/assets/img/Stall+Rubber.jpg'
import mix  from '../public/assets/img/Mix_.jpg'
              {/* +20 102 367 1214 هاتف المبرمج */}
const Skills = () => {
  const [language, setLanguage] = useRecoilState(languageState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    }
  }, [setLanguage]);

  if (!isClient) {
    return null;
  }
  const dir = language === "ar" ? "rtl" : "ltr";
  return (
    <div id='skills'
    dir={dir}
    className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <div className='col-span-2 text-center md:text-left md:items-start flex flex-col items-center md:items-start'>
  <div className='w-48'>
    <Image src={decor} alt='decor'/>
  </div>
        <p className='text-xl tracking-widest uppercase text-[#53525f]'>
        {translations[language].OurProducts}
        </p>
        <h2 className='py-4 text-[#e8c83e]'>{translations[language].Offer}</h2>
  </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={Additive} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{translations[language].SandRubber}</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={Wood } width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{translations[language].WoodChips}</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={SandWithFiber} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{translations[language].SandRubber}</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={Rubber} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{translations[language].Rubber}</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={StallRubber} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{translations[language].WoodRubber}</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={mix} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>{translations[language].mix}</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={Github} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image className='rounded-xl' src={NextJS} width='100px' height='100px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
