import React, { useEffect, useState } from "react";
import translations from "../public/Translation/Translation";
import { languageState } from "../recoil/languageState";
import { useRecoilState } from "recoil";
import decor from "../public/assets/img/decor.png";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/img/about.jpg";

const About = () => {
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
    <div
      dir={dir}
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-1"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-center md:text-left md:items-start flex flex-col items-center md:items-start">
          <div className="w-48">
            <Image src={decor} alt="decor" />
          </div>
          <p className="uppercase text-xl tracking-widest text-[#53525f]">
            {translations[language].about}
          </p>
          <h2 className="py-4 text-[#e8c83e]">{translations[language].Who}</h2>
          <p className="py-2 text-gray-600">{translations[language].whatDo}</p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {translations[language].OurProjects}
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
