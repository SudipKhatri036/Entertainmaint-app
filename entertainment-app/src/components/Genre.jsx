import React from "react";
import GenreCard from "./GenreCard";

function Genre({ genres, pathname }) {
  return (
    <div className="genre-child grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-6 movie-grid text-center">
      {genres.map((gen) => (
        <GenreCard gen={gen} pathname={pathname} />
      ))}
    </div>
  );
}

export default Genre;
