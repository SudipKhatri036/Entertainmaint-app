import React from "react";
import { useNavigate } from "react-router-dom";

function DataHeader({ title, type }) {
  const navigate = useNavigate();
  const typeOfData = type?.toLowerCase() === "tv" ? "tv series" : "movies";

  return (
    <div className="flex items-end justify-between my-8">
      <div className="flex items-end gap-2 md:gap-4">
        <h2 className="capitalize text-2xl md:text-4xl tracking-wide font-light">
          {title}
        </h2>
        <p className="px-2 border-2 border-prime-100 font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md">
          {typeOfData}
        </p>
      </div>
      <button
        className="uppercase font-medium text-[.7rem] md:text-[.8rem] tracking-wide text-prime-200 cursor-pointer hover:underline"
        onClick={() => navigate(`${type}/genre/?name=${title}`)}
      >
        See more
      </button>
    </div>
  );
}

export default DataHeader;
