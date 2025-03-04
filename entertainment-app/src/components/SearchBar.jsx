import { IoSearch } from "react-icons/io5";

function SearchBar() {
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
