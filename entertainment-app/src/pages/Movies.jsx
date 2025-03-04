import { useQuery, useQueryClient } from "@tanstack/react-query";
import Genre from "../components/Genre";
import { useLocation } from "react-router-dom";
import { getMovieGenre } from "../services/apiMovies";

function Movies() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["movieGenre"],
    queryFn: getMovieGenre,
  });

  let { pathname } = useLocation();

  return (
    <div className="movie-genre-parent mt-8">
      <Genre genres={data?.genres} pathname={pathname} isLoading={isLoading} />
    </div>
  );
}

export default Movies;
