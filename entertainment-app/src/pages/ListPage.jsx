import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getLists, getListsFromGenre } from "../services/apiPublic";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

function ListPage() {
  const queryClient = useQueryClient();
  let [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const id = searchParams.get("id");
  const { isSeries } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [`${name}Lists`, isSeries, name],
    queryFn: () =>
      id ? getListsFromGenre(isSeries, id) : getLists(isSeries, name),
  });

  return (
    <div className="mt-8">
      <div className="flex items-end gap-2 md:gap-4">
        <h1 className="text-xl lg:text-3xl">{name}</h1>
        <p className="px-2 border-2 border-prime-100 font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md">
          {isSeries}
        </p>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even)]:hover:animate-wiggleOp">
        {isLoading && <Loader />}
        {data?.results?.map((result) => (
          <MovieCard
            cardData={result}
            type={isSeries === "movies" ? "movies" : "series"}
          />
        ))}
      </div>
    </div>
  );
}

export default ListPage;
