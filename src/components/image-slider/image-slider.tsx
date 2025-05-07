import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Button } from "../ui";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp",
  "https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp ",
  "https://zon.uz/_next/static/media/dewalt_new_desktop.1a3adcaf.webp",
];

export const ImageSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="w-full">
      <div className="container m-auto py-10 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          className="rounded-lg shadow-lg w-full h-[600px]"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center gap-x-4 mt-2 mr-4 justify-end absolute bottom-14 right-10 z-20">
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            variant="ghost"
            className="text-white rounded-full bg-primary w-9"
          >
            <FaArrowLeft />
          </Button>
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            variant="ghost"
            className="text-white rounded-full bg-primary w-9"
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
