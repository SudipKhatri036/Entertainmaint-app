import React from "react";
import { useNavigate } from "react-router-dom";

function MovieHeader({ title, type }) {
  const navigate = useNavigate();
  const isSeries = type.toLowerCase() === "tv series" ? "series" : "movies";

  return (
    <div className="flex items-end justify-between my-8">
      <div className="flex items-end gap-2 md:gap-4">
        <h2 className="capitalize text-2xl md:text-4xl tracking-wide font-light">
          {title}
        </h2>
        <p className="px-2 border-2 border-prime-100 font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md">
          {type}
        </p>
      </div>
      <button
        className="uppercase font-medium text-[.7rem] md:text-[.8rem] tracking-wide text-prime-200 cursor-pointer hover:underline"
        onClick={() => navigate(`${isSeries}/genre/?name=${title}`)}
      >
        See more
      </button>
    </div>
  );
}

export default MovieHeader;
