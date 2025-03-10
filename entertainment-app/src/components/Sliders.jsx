import SliderCard from "./SliderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Loader from "./Loader";

function Sliders({ sliderData = [], status, type }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
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
      {status === "pending" && <Loader />}
      {sliderData?.data?.results?.map((data) => (
        <SwiperSlide key={data?.id}>
          <SliderCard cardData={data} type={type} />
        </SwiperSlide>
      ))}

      <div className="swiper-scrollbar"></div>
    </Swiper>
  );
}

export default Sliders;
