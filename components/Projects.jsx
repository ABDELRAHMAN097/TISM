import React from "react";
import Image from "next/image";
import decor from "../public/assets/img/decor.png";

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
          <h2 className="py-4 text-[#e8c83e]">What I&apos;ve Built</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8"></div>
      </div>
    </div>
  );
};

export default Projects;
