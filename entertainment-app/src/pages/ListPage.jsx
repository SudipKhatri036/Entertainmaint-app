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
  const queryClient = useQueryClient();
  let [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const genreId = searchParams.get("id") || "";
  const { isSeries } = useParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["project", genreId, isSeries, name],
    queryFn: ({ pageParam = 1 }) => {
      return genreId
        ? getListsFromGenre({ isSeries, genreId, pageParam })
        : getLists({ isSeries, name, pageParam });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.results?.length === 20 ? allPages.length + 1 : undefined;
    },
  });

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
          {isSeries}
        </p>
      </div>
      <div>
        {status === "pending" && <Loader />}
        {data?.pages.length < 1 && <ErrorData err={data?.pages} />}
        {data?.pages?.map((page, index) => {
          return (
            <div
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even)]:hover:animate-wiggleOp"
              key={index}
            >
              {page?.results?.map((result) => (
                <MovieCard
                  cardData={result}
                  type={isSeries === "movies" ? "movies" : "series"}
                  key={result?.id}
                />
              ))}
            </div>
          );
        })}
      </div>

      {isFetchingNextPage && <Loader />}
    </div>
  );
}

export default ListPage;
