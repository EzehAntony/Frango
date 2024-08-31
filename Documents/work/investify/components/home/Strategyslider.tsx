"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { strategy } from "@/assets/data";
import { strategyType } from "@/assets/types";
import StrategyCard from "./StrategyCard";

const Strategyslider = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <h1 className="text-2xl">Our Mission</h1>

      <Swiper
        className="w-full "
        spaceBetween={20}
        modules={[Pagination]}
        pagination={{ clickable: true, dynamicBullets: true }} // Enable and center pagination
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        slidesPerView={1}
      >
        {strategy.map((idea: strategyType, i) => (
          <SwiperSlide className="w-full" key={i}>
            <StrategyCard data={idea} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Strategyslider;
