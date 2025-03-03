import Genre from "../components/Genre";
import { useLocation } from "react-router-dom";

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Tv Movie",
  "Thriller",
  "War",
  "Western",
];

function Movies() {
  let { pathname } = useLocation();

  return (
    <div className="movie-genre-parent mt-8">
      <Genre genres={genres} pathname={pathname} />
    </div>
  );
}

export default Movies;
