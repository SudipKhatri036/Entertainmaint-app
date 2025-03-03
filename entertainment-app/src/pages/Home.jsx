import React from "react";
import Sliders from "../components/Sliders";
import MovieHeader from "../components/MovieHeader";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div>
      <MovieHeader />
      <Sliders />
      <MovieHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 movie-grid">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Home;
