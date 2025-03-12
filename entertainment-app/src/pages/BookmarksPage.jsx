import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBookmarkList } from "../services/apiPublic";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

function BookmarksPage() {
  const { data, status } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: getBookmarkList,
  });

  console.log(data);

  return (
    <div className="mt-8">
      <div className="flex items-end gap-2 md:gap-4">
        <h1 className="text-xl lg:text-3xl">Bookmarks List</h1>
      </div>
      <div>
        {status === "pending" && <Loader />}
        {data?.success && <ErrorData err="failed to get data" />}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even)]:hover:animate-wiggleOp">
          {data?.bookmarks?.map((result) => {
            return <MovieCard cardData={result} key={result?.id} />;
          })}
        </div>
        {/* {data?.pages?.map((page, index) => {
          return (
            <div
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-6 [&>*:nth-child(odd)]:hover:animate-wiggle [&>*:nth-child(even)]:hover:animate-wiggleOp"
              key={index}
            >
              {page?.data?.results?.length < 1 && (
                <ErrorData err="No data found 🥲" />
              )}
              {page?.data?.results?.map((result) => {
                return (
                  <MovieCard
                    cardData={result}
                    type={typeOfData}
                    key={result?.id}
                  />
                );
              })}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default BookmarksPage;
