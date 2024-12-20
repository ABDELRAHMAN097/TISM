import React, { useEffect , useState } from 'react';
import translations from '../public/Translation/Translation';
import { languageState } from '../recoil/languageState';
import { useRecoilState } from 'recoil';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import NavLogo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#dcdfe0");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 10) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

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

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="185"
              height="50"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div className="flex items-center">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-yellow-500 hover:text-yellow-500">
              <Link href="/">{translations[language].Home}</Link>
            </li>
            <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-yellow-500 hover:text-yellow-500">
              <Link href="/#about">{translations[language].AboutNav}</Link>
            </li>
            <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-yellow-500 hover:text-yellow-500">
              <Link href="/#skills">{translations[language].Skills}</Link>
            </li>
            <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-yellow-500 hover:text-yellow-500">
              <Link href="/#projects">{translations[language].Projects}</Link>
            </li>
            <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-yellow-500 hover:text-yellow-500">
              <Link href="/resume">{translations[language].Resume}</Link>
            </li>
            <li className="ml-10 font-semibold text-sm uppercase hover:border-b hover:border-yellow-500 hover:text-yellow-500">
              <Link href="/#contact">{translations[language].Contact}</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div className="ml-5">
            <LanguageSwitcher />
          </div>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={NavLogo} width="87" height="35" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
           
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>

            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#53525f]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaLinkedinIn />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
