import React from "react";
import { MdMovieCreation } from "react-icons/md";
import { Link } from "react-router-dom";

function MovieCard() {
  return (
    <Link
      className="movie-grid-child  mb-4 cursor-pointer"
      to={`/movies/moviename`}
    >
      <div className="">
        <img
          src="https://cdn.pixabay.com/photo/2020/04/20/18/10/cinema-5069314_1280.jpg"
          alt="Sample img"
          className="rounded-lg h-56 md:h-auto object-cover w-full"
        />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="font-light">2024</p>
        <span className="w-1 h-1 rounded-full bg-white"></span>
        <div className="flex items-center gap-1 font-light">
          <MdMovieCreation />
          <p>Movie</p>
        </div>
      </div>
      <h2 className="text-lg md:text-xl font-semibold capitalize">
        Movie Name
      </h2>
    </Link>
  );
}

export default MovieCard;
