import { useQuery, useQueryClient } from "@tanstack/react-query";
import Genre from "../components/Genre";
import { useLocation } from "react-router-dom";
import { getSeriesGenre } from "../services/apiSeries";

const genres = [
  "Action & Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Kids",
  "Mystery",
  "News",
  "Reality",
  "Sc-Fi & Fantasy",
  "Soap",
  "Talk",
  "War & Politics",
  "Western",
];

function TvSeries() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["seriesGenre"],
    queryFn: getSeriesGenre,
  });

  let { pathname } = useLocation();

  return (
    <div className="series-genre-parent mt-8">
      <Genre genres={data?.genres} pathname={pathname} isLoading={isLoading} />
    </div>
  );
}

export default TvSeries;
