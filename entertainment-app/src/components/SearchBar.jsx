import { IoSearch } from "react-icons/io5";

function SearchBar() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTU3NjE3YmM0ZWQyMTViNmFlY2I3ZTc3NDIwZWUwZiIsIm5iZiI6MTc0MDkxMDYwNS4xNSwic3ViIjoiNjdjNDMwMGQzZGU3YzljODc1NGIxMDI1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0ySYjK4U8DtvItXuX4kFyVj6F1NYtW8amVotsUodrBE",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
  return (
    <div className="w-full flex items-center gap-4 py-6">
      <label htmlFor="search-inp" className="text-3xl">
        <IoSearch />
      </label>
      <input
        type="text"
        name="search-inp"
        id="search-inp"
        placeholder="Search for movies or TV Series"
        className="w-[80%] outline-none focus:border-b-1 focus:border-b-prime-200 font-light text-2xl tracking-wide caret-danger-100 "
      />
      <button className="bg-prime-200 px-3 py-2 rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
