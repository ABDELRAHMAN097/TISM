import React, { useState } from "react";
import Image from "next/image";
import decor from "../public/assets/img/decor.png";
import img1 from '../public/assets/projects/pp.jpg';
import img2 from '../public/assets/projects/Town Barns.jpg';
import img3 from '../public/assets/projects/Weidehütten.jpg';

const sliderData = [
  { id: 1, title: "Technology 1", img: img1, desc: "Description 1" },
  { id: 2, title: "Technology 2", img: img2, desc: "Description 2" },
  { id: 3, title: "Technology 3", img: img3, desc: "Description 3" },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="projects" className="w-full px-4">
      <div className="max-w-[1240px] mx-auto py-16 px-4 md:px-10">
        <div className="col-span-2 text-center md:text-left md:items-start flex flex-col items-center">
          <div className="w-48">
            <Image src={decor} alt="decor" />
          </div>
          <p className="text-xl tracking-widest uppercase text-[#53525f]">Projects</p>
          <h2 className="py-4 text-[#e8c83e]">What We&apos;ve Built</h2>
        </div>

        {/* السلايدر */}
        <div className="relative w-full flex justify-center items-center pt-16 px-4 md:px-10">
          <div className="flex justify-center items-center w-full space-x-2 md:space-x-4">
            {sliderData.map((slide, index) => (
              <div
                key={slide.id}
                className={`relative transition-all duration-500 ease-in-out cursor-pointer group ${
                  currentSlide === index ? "flex-grow-2 h-[250px] md:h-[400px] w-[150px] md:w-[300px] overflow-hidden" : "flex-grow-1 h-[200px] md:h-[300px] w-[120px] md:w-[250px]"
                } flex-shrink-0 rounded-xl`}
                onClick={() => handleSlideClick(index)} 
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <h3 className="text-sm md:text-2x text-white">{slide.title}</h3>
                  <p className="text-gray-300">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* النقاط السفلية للتنقل */}
        <div className="flex justify-center mt-4">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 mx-2 rounded-full ${
                currentSlide === index ? "bg-[#e8c83e]" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
