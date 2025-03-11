import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { getListFromQuery } from "../services/apiPublic";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

function ResultPage() {
  const { state } = useLocation();
  const { query } = state || {};

  const { data, status } = useQuery({
    queryKey: ["search-results", query],
    queryFn: () => getListFromQuery(query),
  });

  console.log(data);

  return (
    <div className="mt-6">
      <h3 className="text-lg md:text-2xl text-prime-200 tracking-wide">
        Found{" "}
        <span className="text-prime-100 capitalize font-medium">
          {data?.data?.total_results}
        </span>{" "}
        results of search:{" "}
        <span className="text-prime-100 capitalize font-medium">{query}</span>
      </h3>

      {data?.data?.results?.length < 1 && (
        <p className="text-danger-100 text-xl md:text-3xl font-medium tracking-wider text-center w-full mt-8">
          Uhh Oh! No Result Found for {query} ☹️
        </p>
      )}

      <div
        className={`grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even) :hover:animate-wiggleOp`}
      >
        {data?.data?.results?.length < 1 && (
          <ErrorData err="No data found 🥲" />
        )}

        {data?.data?.results?.map((result) => {
          return <MovieCard cardData={result} key={result?.id} type="movie" />;
        })}
      </div>
    </div>
  );
}

export default ResultPage;
