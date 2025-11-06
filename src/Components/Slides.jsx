import React from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";  // React components
import "swiper/css"; // Swiper core styles
import titas from '../assets/titas.png'
import wasa from '../assets/wasa.jfif'
import desco from '../assets/desco.png'
import btcl from '../assets/btcl.png'
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
const Slides = () => {
    const images = [
        wasa, titas, desco, btcl
    ];
    return (
        <div className="w-full flex justify-center mt-8 px-4 rounded-lg py-2 p-4">
            <div className="w-full max-w-3xl">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    navigation={true}          
                    modules={[Navigation]}     
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i} className="flex justify-center items-center">
                            <img
                                src={img}
                                alt={`Slide ${i}`}
                                className="w-full max-w-[600px] h-[200px] sm:h-[350px] md:h-[400px] object-fit rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-500"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slides;