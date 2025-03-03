import { LuLink } from "react-icons/lu";
import { FaArrowLeft, FaImdb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function DetailPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back one step in history
  };

  return (
    <div className="flex mt-8 gap-8 px-16 relative">
      <div className="absolute left-0 border-2 border-prime-300 py-2 px-2 rounded-3xl flex">
        <button className="text-xl cursor-pointer" onClick={handleGoBack}>
          <FaArrowLeft />
        </button>
      </div>
      <div className="lg:w-2/2 h-[500px]">
        <img
          src="https://image.tmdb.org/t/p/original//43bJoLoMJnc68Fua1Oa6wrqfeIG.jpg"
          alt="Sample img"
          className="max-w-full h-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium tracking-wider ">Anora</h1>
        <p className="text-prime-300 text-lg tracking-wide mb-4">
          Love is a hustle
        </p>
        <div className="flex items-center mb-7 gap-6">
          <h2 className="text-3xl font-bold tracking-widest">3.5</h2>
          <div>Star</div>
        </div>
        {/* Time language Detail */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-prime-300 text-2xl mb-4">Length</p>
            <p className="text-md tracking-wide">139 min</p>
          </div>
          <div>
            <p className="text-prime-300 text-2xl mb-4">Language</p>
            <p className="text-md tracking-wide">US</p>
          </div>
          <div>
            <p className="text-prime-300 text-2xl mb-4">Year</p>
            <p className="text-md tracking-wide">2024</p>
          </div>
          <div>
            <p className="text-prime-300 text-2xl mb-4">Status</p>
            <p className="text-md tracking-wide">N/A</p>
          </div>
        </div>
        {/* Time language Detail */}

        {/* Genres Detail */}
        <div className="mt-7">
          <h3 className="mb-2 font-medium tracking-wide text-2xl">Genre</h3>
          <div className="flex gap-2">
            <p className="px-2 py-[2px]  font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center bg-prime-100 text-slate-900">
              Drama
            </p>
            <p className="px-2 py-[2px]  font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center bg-prime-100 text-slate-900">
              Comedy
            </p>
            <p className="px-2 py-[2px]  font-semibold text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center bg-prime-100 text-slate-900">
              Romance
            </p>
          </div>
        </div>
        {/* Genres Detail */}

        {/* Sypnosis */}
        <div className="mt-7">
          <h3 className="mb-2 font-medium tracking-wide text-2xl">Sypnosis</h3>
          <p>
            A young sex worker from Brooklyn gets her chance at a Cinderella
            story when she meets and impulsively marries the son of an oligarch.
            Once the news reaches Russia, her fairytale is threatened as his
            parents set out to get the marriage annulled.
          </p>
        </div>

        {/* Sypnosis */}

        {/* Casts */}
        <h3 className="mb-2 font-medium tracking-wide text-2xl mt-7">Casts</h3>
        <div className="flex flex-wrap gap-2">
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
          <p className="px-2 py-[2px] border-2 border-prime-100 font-normal text-[.7rem] md:text-[.8rem] uppercase tracking-wide rounded-md text-center   ">
            Micky Madison
          </p>
        </div>
        {/* Casts */}

        {/* Action Btn */}
        <div className="flex mt-7 gap-4">
          <button className="flex item-center justify-center gap-2 bg-prime-200 px-6 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300">
            Website{" "}
            <span className="mt-1 text-lg">
              <LuLink />
            </span>
          </button>

          <button className="flex item-center justify-center gap-2 bg-prime-200 px-6 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300">
            IMDB{" "}
            <span className="mt-1 text-lg">
              <FaImdb />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
