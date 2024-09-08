import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules';

export default function GalleryCard({ item }) {
  return (
    <>
      <div className='dabba flex sm:ml-36 sm:w-[80%] flex-wrap mb-20 gap-x-2 gap-y-10 sm:mt-20'>
        
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
         
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >

          {
            item[0].map((d) => {
              return (
                <SwiperSlide color='green'>
                  <img src={d.imgUrl} className='h-full w-full' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            // loop:true,
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
         
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >

          {
            item[1].map((d) => {
              return (
                <SwiperSlide color='green'>
                  <img src={d.imgUrl} className='h-full w-full' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            // loop:true,
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
         
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >

          {
            item[2].map((d) => {
              return (
                <SwiperSlide color='green'>
                  <img src={d.imgUrl} className='h-full w-full' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            // loop:true,
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
         
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >

          {
            item[3].map((d) => {
              return (
                <SwiperSlide color='green'>
                  <img src={d.imgUrl} className='h-full w-full' />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </>
  );
}
