import Genre from "../components/Genre";
import { useLocation } from "react-router-dom";

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
  let { pathname } = useLocation();

  return (
    <div className="series-genre-parent mt-8">
      <Genre genres={genres} pathname={pathname} />
    </div>
  );
}

export default TvSeries;
