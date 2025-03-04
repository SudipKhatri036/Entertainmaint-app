import React from "react";
import GenreCard from "./GenreCard";
import Loader from "./Loader";

function Genre({ genres = [], pathname, isLoading }) {
  return (
    <div
      className={`genre-child grid gap-4 md:gap-6 lg:gap-6 movie-grid text-center ${
        isLoading
          ? "grid-cols-1 h-44"
          : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      }`}
    >
      {isLoading && <Loader />}
      {!isLoading &&
        genres.map((gen) => (
          <GenreCard gen={gen.name} pathname={pathname} key={gen.id} />
        ))}
    </div>
  );
}

export default Genre;
