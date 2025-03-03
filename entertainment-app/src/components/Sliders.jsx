import SliderCard from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function Sliders() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Scrollbar]}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        550: {
          slidesPerView: 2,
        },
        350: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard />
      </SwiperSlide>
      <div class="swiper-scrollbar h-4 "></div>
    </Swiper>
  );
}

export default Sliders;
