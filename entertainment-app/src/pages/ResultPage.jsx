import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { getListMovieQuery, getListSeriesByQuery } from "../services/apiPublic";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

function ResultPage() {
  const { state } = useLocation();
  const { query } = state || {};

  const { data: movies, status: movieStatus } = useQuery({
    queryKey: ["searchResult", query],
    queryFn: () => getListMovieQuery(query),
  });

  const { data: series, status: seriesStatus } = useQuery({
    queryKey: ["searchResult", query],
    queryFn: () => getListSeriesByQuery(query),
  });

  const updatedMovieArr = movies?.results?.map((res) => {
    return { ...res, type: "movie" };
  });

  const updatedSeriesArr = series?.results?.map((res) => {
    return { ...res, type: "tv" };
  });

  const mergerArr =
    (movies?.results?.length || series?.results?.length) &&
    [...updatedMovieArr, ...updatedSeriesArr]?.filter(
      (value, index, self) => index === self.findIndex((t) => t.id === value.id)
    );

  return (
    <div className="mt-6">
      <h3 className="text-lg md:text-2xl text-prime-200 tracking-wide">
        Found{" "}
        <span className="text-prime-100 capitalize font-medium">
          {mergerArr?.length}
        </span>{" "}
        results of search:{" "}
        <span className="text-prime-100 capitalize font-medium">{query}</span>
      </h3>

      {movies?.results.length < 1 && (
        <p className="text-danger-100 text-xl md:text-3xl font-medium tracking-wider text-center w-full mt-8">
          Uhh Oh! No Result Found for {query} ☹️
        </p>
      )}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even)]:hover:animate-wiggleOp">
        {movieStatus === "loading" && seriesStatus === "loading" && <Loader />}
        {mergerArr
          ? mergerArr?.map((result) => {
              return (
                <MovieCard
                  cardData={result}
                  key={result?.id}
                  type={`${result.type}s`}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ResultPage;
