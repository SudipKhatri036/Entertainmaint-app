import Loader from "./Loader";
import MovieCardContainer from "./MovieCardContainer";
import DataHeader from "./DataHeader";
import MovieCard from "./MovieCard";
import Sliders from "./Sliders";
import { sliceArray } from "../utils/helper";

function HomeSeries({ results, status }) {
  return (
    <>
      {/* Trending Series */}
      <DataHeader title={results?.[0].label} type={results?.[0].type} />
      <Sliders
        sliderData={results?.[0]}
        isLoading={status}
        type={results?.[0].type}
      />

      {/* Popular Series */}

      <DataHeader title={results?.[1].label} type={results?.[1].type} />
      <MovieCardContainer>
        {status === "pending" && <Loader />}
        {sliceArray(results?.[1]?.data?.results, 6)?.map((movie) => (
          <MovieCard
            cardData={movie}
            key={movie?.id}
            type={results?.[1].type}
          />
        ))}
      </MovieCardContainer>

      {/* Top Rated */}

      <DataHeader title={results?.[2].label} type={results?.[2].type} />
      <MovieCardContainer>
        {status === "pending" && <Loader />}
        {sliceArray(results?.[2]?.data?.results, 6)?.map((movie) => (
          <MovieCard
            cardData={movie}
            key={movie?.id}
            type={results?.[2].type}
          />
        ))}
      </MovieCardContainer>

      {/* Airing Today */}

      <DataHeader title={results?.[3].label} type={results?.[3].type} />
      <MovieCardContainer>
        {status === "pending" && <Loader />}
        {sliceArray(results?.[3]?.data?.results, 6)?.map((movie) => (
          <MovieCard
            cardData={movie}
            key={movie?.id}
            type={results?.[3].type}
          />
        ))}
      </MovieCardContainer>

      {/* Up Coming */}

      <DataHeader title={results?.[4].label} type={results?.[4].type} />
      <MovieCardContainer>
        {status === "pending" && <Loader />}
        {sliceArray(results?.[4]?.data?.results, 6)?.map((movie) => (
          <MovieCard
            cardData={movie}
            key={movie?.id}
            type={results?.[4].type}
          />
        ))}
      </MovieCardContainer>
    </>
  );
}

export default HomeSeries;
