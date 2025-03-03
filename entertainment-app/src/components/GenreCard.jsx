import { Link } from "react-router-dom";

function GenreCard({ gen, pathname = "/movies" }) {
  return (
    <Link
      to={`${pathname}/genre?name=${encodeURIComponent(gen)}`}
      className="h-44 w-full flex items-center justify-center bg-prime-700 rounded-lg font-semibold tracking-wider text-xl genre-gChild hover:animate-wiggle"
    >
      {gen}
    </Link>
  );
}

export default GenreCard;
