import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (query.trim() === "") {
      setQuery("");
      return;
    }

    setQuery("");
    navigate("/results", { state: { query } });
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full flex items-center gap-4 py-6"
    >
      <label htmlFor="search-inp" className="text-xl md:text-3xl">
        <IoSearch />
      </label>
      <input
        type="text"
        name="search-inp"
        id="search-inp"
        placeholder="Search for movies or TV Series"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[90%] outline-none px-2 focus:border-b-1 focus:border-b-prime-200 font-light text-xl md:text-2xl tracking-wide caret-danger-100"
      />
      <button className="bg-prime-200 px-3 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
