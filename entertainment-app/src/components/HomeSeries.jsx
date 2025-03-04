import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getPopularSeries,
  getTodayAiringSeries,
  getTopRatedSeries,
  getTrendingOfWeekS,
  getUpcomingAiringSeries,
} from "../services/apiSeries";
import Loader from "./Loader";
import MovieCardContainer from "./MovieCardContainer";
import MovieHeader from "./MovieHeader";
import MovieCard from "./MovieCard";
import Sliders from "./Sliders";

function HomeSeries() {
  const queryClient = useQueryClient();

  const { data: trendingWeekT, isLoading: isLoading1 } = useQuery({
    queryKey: ["trendingOfWeekSeries"],
    queryFn: getTrendingOfWeekS,
  });

  const { data: popularT, isLoading: isLoading2 } = useQuery({
    queryKey: ["popularSeries"],
    queryFn: getPopularSeries,
  });

  const { data: topRatedT, isLoading: isLoading3 } = useQuery({
    queryKey: ["topRatedSeries"],
    queryFn: getTopRatedSeries,
  });
  const { data: airingTodayT, isLoading: isLoading4 } = useQuery({
    queryKey: ["airingTodaySeries"],
    queryFn: getTodayAiringSeries,
  });

  const { data: upComingT, isLoading: isLoading5 } = useQuery({
    queryKey: ["upComingAiringSeries"],
    queryFn: getUpcomingAiringSeries,
  });

  return (
    <>
      <MovieHeader title="Trending" type="Tv series" />
      <Sliders
        sliderData={trendingWeekT?.results}
        isLoading={isLoading1}
        type="series"
      />

      {/* Popular Movies */}
      <MovieHeader title="Popular" type="Tv series" />
      <MovieCardContainer>
        {isLoading2 && <Loader />}
        {popularT?.results?.slice(0, 6)?.map((series) => (
          <MovieCard cardData={series} key={series?.id} type="series" />
        ))}
      </MovieCardContainer>

      {/* Top Rated */}
      <MovieHeader title="Top Rated" type="Tv series" />
      <MovieCardContainer>
        {isLoading3 && <Loader />}
        {topRatedT?.results?.slice(0, 6)?.map((series) => (
          <MovieCard cardData={series} key={series?.id} type="series" />
        ))}
      </MovieCardContainer>

      {/* Airing Today */}
      <MovieHeader title="Airing Today" type="Tv series" />
      <MovieCardContainer>
        {isLoading4 && <Loader />}
        {airingTodayT?.results?.slice(0, 6)?.map((series) => (
          <MovieCard cardData={series} key={series?.id} type="series" />
        ))}
      </MovieCardContainer>

      {/* Up Coming */}
      <MovieHeader title="On Air" type="Tv series" />
      <MovieCardContainer>
        {isLoading5 && <Loader />}
        {upComingT?.results?.slice(0, 6)?.map((series) => (
          <MovieCard cardData={series} key={series?.id} type="series" />
        ))}
      </MovieCardContainer>
    </>
  );
}

export default HomeSeries;
