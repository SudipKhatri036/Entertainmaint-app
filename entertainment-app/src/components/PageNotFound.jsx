import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center h-[50vh] md:h-[60vh] justify-center text-center">
      <h1 className="text-6xl md:text-9xl font-bold tracking-wide mb-4 md:mb-8">
        404
      </h1>

      <h3 className="text-xl md:text-3xl font-medium tracking-wide">
        Looks like You're Lost
      </h3>
      <p className="mb-8 text-sm md:text-base md:tracking-wide uppercase text-prime-200">
        The page you are looking for is not available !
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-prime-200 px-3 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300"
      >
        Go Home
      </button>
    </div>
  );
}

export default PageNotFound;
