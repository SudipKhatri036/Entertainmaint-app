import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingOfWeek,
  getUpComingMovies,
} from "../services/apiMovies";
import MovieHeader from "./MovieHeader";
import Sliders from "./Sliders";
import MovieCardContainer from "./MovieCardContainer";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

function HomeMovie() {
  const queryClient = useQueryClient();

  const { data: trendingWeekM, isLoading: isLoading1 } = useQuery({
    queryKey: ["trendingOfWeekMovies"],
    queryFn: getTrendingOfWeek,
  });

  const { data: popularM, isLoading: isLoading2 } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const { data: topRatedM, isLoading: isLoading3 } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });
  const { data: nowPlayingM, isLoading: isLoading4 } = useQuery({
    queryKey: ["nowPlayingMovies"],
    queryFn: getNowPlayingMovies,
  });

  const { data: upComingM, isLoading: isLoading5 } = useQuery({
    queryKey: ["upComingMovies"],
    queryFn: getUpComingMovies,
  });

  return (
    <>
      <MovieHeader title="Trending" type="movie" />
      <Sliders
        sliderData={trendingWeekM?.results}
        isLoading={isLoading1}
        type="movies"
      />
      {/* Popular Movies */}
      <MovieHeader title="Popular" type="movie" />
      <MovieCardContainer>
        {isLoading2 && <Loader />}
        {popularM?.results?.slice(0, 6)?.map((movie) => (
          <MovieCard cardData={movie} key={movie?.id} type="movies" />
        ))}
      </MovieCardContainer>
      {/* Top Rated */}
      <MovieHeader title="Top Rated" type="movie" />
      <MovieCardContainer>
        {isLoading3 && <Loader />}
        {topRatedM?.results?.slice(0, 6)?.map((movie) => (
          <MovieCard cardData={movie} key={movie?.id} type="movies" />
        ))}
      </MovieCardContainer>
      {/* Now Playing */}
      <MovieHeader title="Now Playing" type="movie" />
      <MovieCardContainer>
        {isLoading4 && <Loader />}
        {nowPlayingM?.results?.slice(0, 6)?.map((movie) => (
          <MovieCard cardData={movie} key={movie?.id} type="movies" />
        ))}
      </MovieCardContainer>
      {/* Up Coming */}
      <MovieHeader title="Up coming" type="movie" />
      <MovieCardContainer>
        {isLoading5 && <Loader />}
        {upComingM?.results?.slice(0, 6)?.map((movie) => (
          <MovieCard cardData={movie} key={movie?.id} type="movies" />
        ))}
      </MovieCardContainer>
    </>
  );
}

export default HomeMovie;
