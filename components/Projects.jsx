import React from "react";
import Image from "next/image";
import decor from "../public/assets/img/decor.png";
import img1 from '../public/assets/projects/loopstal.jpg';
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div className="col-span-2 text-center md:text-left md:items-start flex flex-col items-center md:items-start">
          <div className="w-48">
            <Image src={decor} alt="decor" />
          </div>
          <p className="text-xl tracking-widest uppercase text-[#53525f]">
            Projects
          </p>
          <h2 className="py-4 text-[#e8c83e]">What We&apos;ve Built</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group perspective-1000 w-64 h-80">
            <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front side */}
              <div className="absolute w-full h-full bg-white shadow-md rounded-lg backface-hidden">
                <Image
                  src={img1} 
                  alt="Profile Image"
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Back side */}
              <div className="absolute w-full h-full bg-purple-600 text-white p-4 rounded-lg backface-hidden rotate-y-180">
                <h2 className="text-lg font-bold">Mark Jones</h2>
                <p className="mt-2 text-sm">Web Developer</p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut molestias
                  quod amet consectetur.
                </p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" aria-label="Twitter">
                    <FaTwitter className="text-white" />
                  </a>
                  <a href="#" aria-label="Github">
                    <FaGithub className="text-white" />
                  </a>
                  <a href="#" aria-label="Dribbble">
                    <FaDribbble className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
