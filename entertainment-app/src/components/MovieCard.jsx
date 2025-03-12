import React from "react";
import { MdMovieCreation, MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
import { getFirstDate, shortifyName } from "../utils/helper";
import { FaBookmark } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";

function MovieCard({ cardData, type }) {
  const { isLoggedIn } = useAuth();

  const { mutate, isPending, data } = useMutation({
    mutationFn: (formData) => {
      return axios.post(
        `${import.meta.env.VITE_LOCAL_URL}/bookmark`,
        formData,
        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );
    },
  });

  const handleBookmark = async () => {
    const bookmarkData = {
      id: cardData?.id,
      title: cardData?.title || cardData?.name,
      backdropPath: cardData?.backdrop_path || "",
      poserPath: cardData?.poster_path || "",
      releaseDate: cardData?.release_date || cardData?.first_air_date,
    };

    mutate(bookmarkData, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data?.data?.message, {
          position: "bottom-right",
        });
      },
    });
  };

  return (
    <div className="movie-grid-child  mb-4 cursor-pointer hover:animate-wiggle relative">
      {isLoggedIn && (
        <button
          className={`text-xl absolute right-[4px] top-[8px] border-[1px] p-2 rounded-full cursor-pointer hover:border-prime-200 hover:text-prime-200 ${
            data?.data?.bookId === cardData?.id
              ? "text-prime-200 border-prime-200"
              : ""
          }`}
          onClick={handleBookmark}
          disabled={isPending && data?.data?.bookId === cardData?.id}
        >
          <FaBookmark />
        </button>
      )}
      <Link>
        <div className="h-[133px] md:h-[140px] lg:h-[174px]">
          <img
            src={
              cardData?.backdrop_path ||
              cardData?.poster_path ||
              cardData?.backdropPath
                ? `https://image.tmdb.org/t/p/w500/${
                    cardData?.backdrop_path ||
                    cardData?.poster_path ||
                    cardData?.backdropPath ||
                    cardData?.poserPath
                  }`
                : "https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_960_720.jpg"
            }
            alt={`${cardData?.title || cardData?.name} image`}
            className="max-w-full h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="font-light">
            {getFirstDate(cardData?.release_date) ||
              getFirstDate(cardData?.first_air_date) ||
              cardData?.releaseDate ||
              "N/A"}
          </p>
          <span className="w-1 h-1 rounded-full bg-white"></span>
          <div className="flex items-center gap-1 font-light">
            {type === "movies" ? (
              <>
                <MdMovieCreation />
                <p>Movie</p>
              </>
            ) : (
              <>
                <MdLiveTv />
                <p>Tv Series</p>
              </>
            )}
          </div>
        </div>
        <h2 className="text-lg md:text-xl font-semibold capitalize">
          {shortifyName(cardData?.title) || shortifyName(cardData?.name)}
        </h2>
      </Link>
    </div>
  );
}

export default MovieCard;
