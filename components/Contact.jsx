import React, { useEffect, useState } from "react";
import translations from "../public/Translation/Translation";
import { languageState } from "../recoil/languageState";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import decor from "../public/assets/img/decor.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMapMarker,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+966555450376";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  // Language
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
    <div id="contact" dir={dir} className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <div className="col-span-2 text-center md:text-left md:items-start flex flex-col items-center md:items-start">
          <div className="w-48">
            <Image src={decor} alt="decor" />
          </div>
          <p className="text-xl tracking-widest uppercase text-[#53525f]">
            {translations[language].contact}
          </p>
          <h2 className="py-4 text-[#e8c83e]">{translations[language].Get}</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <p className="pt-4 flex items-center">
                  <FaMapMarker className="mr-2 text-[#e8c83e]" /> Al
                  {translations[language].address}
                </p>
                <p className="py-4 flex items-center">
                  <FaPhone className="mr-2 text-[#e8c83e]" /> 920005662
                </p>
                <p className="flex items-center">
                  <IoMdMail className="mr-2 text-[#e8c83e]" /> info@tismpro.sa
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between py-4">
                  {/* social links */}
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={handleWhatsAppClick}
                  >
                    <FaWhatsapp />
                  </div>
                  <a
                    href="https://www.facebook.com/tismpro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaFacebook />
                    </div>
                    {/* https://www.instagram.com/tismpro_/ */}
                  </a>
                  <a
                    href="https://www.instagram.com/tismpro_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tismpro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 bg-yellow-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {translations[language].Name}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      {translations[language].Phone}
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {translations[language].Email}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {translations[language].Subject}
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    {translations[language].Message}
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-lg	 text-gray-100 mt-4">
                  {translations[language].send}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#e8c83e]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
