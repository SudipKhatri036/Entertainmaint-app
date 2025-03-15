import { LuLink } from "react-icons/lu";
import { FaArrowLeft, FaImdb } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDetail } from "../services/apiPublic";
import { Rating } from "primereact/rating";
import { useEffect, useState } from "react";
import ExtraDetail from "../components/ExtraDetail";
import Loader from "../components/Loader";
import { convertToStars, sliceArray } from "../utils/helper";

function DetailPage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const { type, id } = useParams();

  const { data, status } = useQuery({
    queryKey: [`Details`, type, id],
    queryFn: () => getDetail(type, id),
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  let imageSrc;
  const starRating = convertToStars(data?.data?.vote_average);
  const casts =
    data?.casts?.length > 25 && !showMore
      ? sliceArray(data?.casts, 25)
      : data?.casts;

  if (windowWidth < 768) {
    imageSrc = data?.data?.backdrop_path;
  } else {
    imageSrc = data?.data?.poster_path;
  }

  {
    status === "pending" && <Loader />;
  }

  return (
    <div className="flex flex-col md:flex-row mt-8 gap-8 lg:px-16 relative">
      <div className="absolute top-[-45px]  left-0 border-2 border-prime-300 py-2 px-2 rounded-3xl flex">
        <button className="text-xl cursor-pointer" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
      </div>
      <div className="w-full xs:w-[80%] md:w-[50%] mx-auto lg:w-2/4 h-[400px] lg:h-[500px]">
        <img
          src={
            data?.data?.backdrop_path || data?.data?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${
                  imageSrc ||
                  data?.data?.backdrop_path ||
                  data?.data?.poster_path
                }`
              : "https://cdn.pixabay.com/photo/2015/06/24/02/12/the-blurred-819388_960_720.jpg"
          }
          alt={`${data?.data?.title || data?.data?.name} type poster`}
          className="max-w-full w-full object-cover h-full rounded-lg"
        />
      </div>
      <div className="md:w-1/2 lg:w-full">
        <h1 className="text-4xl font-medium tracking-wider text-center md:text-left">
          {data?.data?.title || data?.data?.name}
        </h1>
        <p className="text-prime-300 text-lg tracking-wide mb-4 text-center md:text-left">
          {data?.data?.tagline}
        </p>

        {/* Star Detail */}
        <div className="flex items-center mb-7 gap-6 justify-center md:justify-start">
          <h2 className="text-3xl font-bold tracking-widest">
            {isNaN(starRating)
              ? 0.0
              : starRating.toString().length > 2
              ? starRating
              : `${starRating}.0`}
          </h2>
          <Rating
            value={isNaN(starRating) ? 0.0 : starRating}
            disabled
            readOnly
            cancel={false}
          />
        </div>
        {/* Star Detail */}

        {/* Time language Detail */}
        <ExtraDetail data={data?.data} typeOf={type} />
        {/* Time language Detail */}

        {/* Genres Detail */}
        <div className="mt-7">
          <h3 className="mb-2 font-medium tracking-wide text-2xl">Genre</h3>
          <div className="flex gap-2">
            {data?.data?.genres?.map((gen) => (
              <p
                className="px-2 py-[2px]  font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center bg-prime-100 text-slate-900"
                key={gen.id}
              >
                {gen.name}
              </p>
            ))}
          </div>
        </div>
        {/* Genres Detail */}

        {/* Sypnosis */}
        <div className="mt-7">
          <h3 className="mb-2 font-medium tracking-wide text-2xl">Sypnosis</h3>
          <p>{data?.data?.overview}</p>
        </div>

        {/* Sypnosis */}

        {/* Casts */}
        <div>
          <h3 className="mb-2 font-medium tracking-wide text-2xl mt-7">
            Casts
          </h3>
          <div className="flex flex-wrap gap-2">
            {casts?.map((cas) => (
              <p
                className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center"
                key={cas?.id}
              >
                {cas?.name}
              </p>
            ))}
          </div>
          {casts?.length > 10 && (
            <button
              className="bg-prime-200 px-3 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300 mt-3"
              onClick={() => setShowMore((m) => !m)}
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          )}
        </div>
        {/* Casts */}

        {/* Action Btn */}
        <div className="flex mt-7 gap-4 flex-wrap">
          <Link
            to={data?.data?.homepage}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex item-center justify-center gap-2 bg-prime-200 px-6 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300"
          >
            Website{" "}
            <span className="mt-1 text-lg">
              <LuLink />
            </span>
          </Link>

          <Link
            to={`https://www.imdb.com/title/${data?.data?.imdb_id}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex item-center justify-center gap-2 bg-prime-200 px-6 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300"
          >
            IMDB
            <span className="mt-1 text-lg">
              <FaImdb />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
