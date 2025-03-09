import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-prime-800 h-screen w-full flex items-center justify-center text-prime-100">
      <form className="bg-prime-700 px-4 sm:px-6 py-8 md:p-8 min-w-[70%] xs:min-w-96 2xl:min-w-[35rem] rounded-lg">
        <h2 className="text-3xl tracking-wider text-center">Login</h2>
        <div className="w-18 h-[3px] mx-auto bg-prime-200 "></div>
        <div className="mb-3 relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            className="w-full block border-b-2 border-b-prime-200 p-2 pl-8 mt-4 mb-1 focus:outline-0 focus-visible:border-b-indigo-200 active:border-b-indigo-200 autofill:bg-transparent 2xl:text-xl"
          />
          <span className="absolute top-4 left-3 text-sm lg:text-md">
            <MdEmail />
          </span>
          <p className="text-danger-100 text-xs tracking-wide font-medium">
            Please enter you email
          </p>
        </div>
        <div className="mb-3 relative">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full block border-b-2 border-prime-200 p-2 pl-8  mt-4 mb-1 focus:outline-0 focus-visible:border-b-indigo-200 active:border-b-indigo-200 autofill:bg-transparent 2xl:text-xl"
          />
          <span className="absolute top-4 left-3 text-xs lg:text-md">
            <FaLock />
          </span>
          <p className="text-danger-100 text-xs tracking-wide font-medium">
            Please enter you password
          </p>
        </div>
        <div>
          <button className="w-full bg-prime-200 px-3 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300 mt-2">
            Login
          </button>
          <Link
            to="auth/forget-password"
            className="block text-xs tracking-wide text-center mt-2 hover:underline"
          >
            Forget Password?
          </Link>

          <Link className="block mt-6 text-center hover:scale-105 transition-all duration-300">
            Create new account &#8594;
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
