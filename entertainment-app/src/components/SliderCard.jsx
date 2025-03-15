import React from "react";
import { SwiperSlide } from "swiper/react";
import { MdMovieCreation, MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
import { getFirstDate, shortifyName } from "../utils/helper";

function SliderCard({ cardData, type }) {
  return (
    <Link className="relative" to={`/${type}/${cardData?.id}`}>
      <div className="relative h-auto  w-full z-0 object-cover rounded-lg">
        <img
          src={
            cardData
              ? `https://image.tmdb.org/t/p/w500/${cardData?.backdrop_path}`
              : "https://cdn.pixabay.com/photo/2020/04/20/18/10/cinema-5069314_1280.jpg"
          }
          alt={`${cardData?.title}  image`}
          className="h-full rounded-md"
        />
      </div>
      <div className="relative bottom-16 left-2 z-10 flex items-center gap-2">
        <p className="font-light">
          {getFirstDate(cardData?.release_date) ||
            getFirstDate(cardData?.first_air_date)}
        </p>
        <span className="w-1 h-1 rounded-full bg-white"></span>
        <div className="flex items-center gap-1 font-light">
          {type === "movie" ? (
            <>
              <MdMovieCreation />
              <p>Movie</p>
            </>
          ) : (
            <>
              <MdLiveTv />
              <p>Tv Series</p>
            </>
          )}
        </div>
      </div>
      <h2 className="absolute bottom-8 left-2 text-lg md:text-xl font-semibold capitalize">
        {shortifyName(cardData?.title) || shortifyName(cardData?.name)}
      </h2>
    </Link>
  );
}

export default SliderCard;
