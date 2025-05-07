import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "../ui";

const images = [
  "https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp",
  "https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp",
  "https://zon.uz/_next/static/media/dewalt_new_desktop.1a3adcaf.webp",
];

export const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div className="container m-auto py-10 relative">
        <div
          className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition duration-500"
          />
        </div>

        <div className="flex items-center gap-x-4 mt-2 mr-4 justify-end absolute bottom-14 right-10 z-20">
          <Button
            onClick={goToPrev}
            variant="ghost"
            className="text-white rounded-full bg-primary w-9"
          >
            <FaArrowLeft />
          </Button>
          <Button
            onClick={goToNext}
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
