import React from "react";
import { MdMovieCreation, MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
import { getFirstDate, shortifyName } from "../utils/helper";

function MovieCard({ cardData, type, hideType }) {
  return (
    <Link
      className="movie-grid-child  mb-4 cursor-pointer hover:animate-wiggle"
      to={`/${type}/${cardData?.id}`}
    >
      <div className="h-[133px] md:h-[140px] lg:h-[174px]">
        <img
          src={
            cardData?.backdrop_path || cardData?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${
                  cardData?.backdrop_path || cardData?.poster_path
                }`
              : "https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_960_720.jpg"
          }
          alt={`${cardData?.title || cardData?.name} image`}
          className="max-w-full h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="font-light">
          {getFirstDate(cardData?.release_date) ||
            getFirstDate(cardData?.first_air_date) ||
            "N/A"}
        </p>
        <span className="w-1 h-1 rounded-full bg-white"></span>
        <div className="flex items-center gap-1 font-light">
          {type === "movies" ? (
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
      <h2 className="text-lg md:text-xl font-semibold capitalize">
        {shortifyName(cardData?.title) || shortifyName(cardData?.name)}
      </h2>
    </Link>
  );
}

export default MovieCard;
