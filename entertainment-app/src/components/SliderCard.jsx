import React from "react";
import { SwiperSlide } from "swiper/react";
import { MdMovieCreation } from "react-icons/md";
import { Link } from "react-router-dom";

function SliderCard() {
  return (
    <Link className="relative" to={`/movies/moviename`}>
      <div className="relative h-auto  w-full z-0 object-cover rounded-lg">
        <img
          src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg"
          alt="movie image"
          className="h-full rounded-md"
        />
      </div>
      <div className="relative bottom-16 left-2 z-10 flex items-center gap-2">
        <p className="font-light">2024</p>
        <span className="w-1 h-1 rounded-full bg-white"></span>
        <div className="flex items-center gap-1 font-light">
          <MdMovieCreation />
          <p>Movie</p>
        </div>
      </div>
      <h2 className="absolute bottom-8 left-2 text-lg md:text-xl font-semibold capitalize">
        Movie Name
      </h2>
    </Link>
  );
}

export default SliderCard;
