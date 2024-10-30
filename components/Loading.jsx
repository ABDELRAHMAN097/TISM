import React from 'react';
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative">
      <Image
        src="/assets/navLogo.png" // تأكد من عدم استخدام '/public' في المسار
        alt="Loading"
        width={150} // حدد العرض الذي تريده
        height={150} // حدد الارتفاع الذي تريده
        objectFit="contain" // لضمان الحفاظ على نسبة العرض إلى الارتفاع
      />
      <div className="mt-4 flex space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`animate-bounce w-4 h-4 bg-yellow-500 rounded-full`}
            style={{ animationDelay: `${index * 100}ms` }} // تأخير الأنيميشن
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
