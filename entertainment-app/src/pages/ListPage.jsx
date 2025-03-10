import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useParams, useSearchParams } from "react-router-dom";
import { getLists, getListsFromGenre } from "../services/apiPublic";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";
import ErrorData from "../components/ErrorData";

function ListPage() {
  let [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const genreId = searchParams.get("id") || "";
  const { typeOfData } = useParams();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["project", genreId, typeOfData, name],
      queryFn: ({ pageParam = 1 }) => {
        return genreId
          ? getListsFromGenre({ typeOfData, genreId, name, pageParam })
          : getLists({ typeOfData, name, pageParam });
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.results?.length === 20
          ? allPages.length + 1
          : undefined;
      },
    });

  console.log(data);

  function handleScroll() {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;

    if (bottom && hasNextPage) {
      fetchNextPage();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  return (
    <div className="mt-8">
      <div className="flex items-end gap-2 md:gap-4">
        <h1 className="text-xl lg:text-3xl">{name}</h1>
        <p className="px-2 border-2 border-prime-100 font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md">
          {typeOfData}
        </p>
      </div>
      <div>
        {status === "pending" && <Loader />}
        {data?.success && <ErrorData err="failed to get data" />}
        {data?.pages?.map((page, index) => {
          return (
            <div
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even)]:hover:animate-wiggleOp"
              key={index}
            >
              {page?.data?.results?.map((result) => {
                return (
                  <MovieCard
                    cardData={result}
                    type={typeOfData === "movies" ? "movies" : "series"}
                    key={result?.id}
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      {isFetchingNextPage && <Loader />}
    </div>
  );
}

export default ListPage;
