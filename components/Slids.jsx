import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import slid1 from '../public/assets/img/sand.jpg';
import slid2 from '../public/assets/img/Additive 1).jpg';
import slid3 from '../public/assets/img/arena2.jpg';
import slid4 from '../public/assets/img/Arena.jpg';
import slid5 from '../public/assets/img/pp.jpg';
import slid6 from '../public/assets/img/dvdv.jpg';
import slid7 from '../public/assets/img/nm.jpg';
import slid8 from '../public/assets/img/Rubber.jpg';
import slid9 from '../public/assets/img/BarnPros.jpg';

function Slids() {
  return (
    <div className="w-full flex justify-center items-center  mt-10 lg:mt-28 py-5">
      <div className="w-full max-w-[1200px]">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints ={{
            320: {  
              slidesPerView: 2,
            },
            640: {   
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className="mySwiper"
        >
          
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid1} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid2} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid3} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid4} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid5} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid6} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid7} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid8} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-32 w-32 flex items-center justify-center">
              <Image src={slid9} className="rounded-xl object-cover" alt="/" layout="fill" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slids;
