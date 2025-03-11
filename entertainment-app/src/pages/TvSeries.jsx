import { useQuery } from "@tanstack/react-query";
import Genre from "../components/Genre";
import { useLocation } from "react-router-dom";
import { getGenre } from "../services/apiPublic";

function TvSeries() {
  const { data, status } = useQuery({
    queryKey: ["movieGenre"],
    queryFn: () => getGenre("tv"),
  });

  let { pathname } = useLocation();

  return (
    <div className="series-genre-parent mt-8">
      <Genre genres={data?.data?.genres} pathname={pathname} status={status} />
    </div>
  );
}

export default TvSeries;
