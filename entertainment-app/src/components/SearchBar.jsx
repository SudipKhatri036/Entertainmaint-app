import { IoSearch } from "react-icons/io5";

function SearchBar() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=4a57617bc4ed215b6aecb7e77420ee0f";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
  return (
    <div className="w-full flex items-center gap-4 py-6">
      <label htmlFor="search-inp" className="text-xl md:text-3xl">
        <IoSearch />
      </label>
      <input
        type="text"
        name="search-inp"
        id="search-inp"
        placeholder="Search for movies or TV Series"
        className="w-[90%] outline-none focus:border-b-1 focus:border-b-prime-200 font-light text-xl md:text-2xl tracking-wide caret-danger-100 "
      />
      <button className="bg-prime-200 px-3 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
