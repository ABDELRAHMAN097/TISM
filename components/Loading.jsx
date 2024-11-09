import React from 'react';
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative">
      <Image
        src="/assets/navLogo.png" 
        alt="Loading"
        width={150} 
        height={150} 
        objectFit="contain" 
      />
      <div className="mt-4 flex space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`animate-bounce w-4 h-4 bg-yellow-500 rounded-full`}
            style={{ animationDelay: `${index * 100}ms` }} 
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
