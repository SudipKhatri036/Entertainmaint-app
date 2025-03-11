import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post(`${import.meta.env.LOCAL_URL}/auth/register`, formData);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue, {
      onSuccess: (data, variables) => {
        console.log(data);
        console.log(variables);

        if (data?.data?.success) {
          toast.success(data?.data?.message, {
            position: "bottom-right",
          });
          setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
          });
          navigate("/");
        } else {
          toast.error(data?.data?.message, {
            position: "bottom-right",
          });
        }
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "bottom-left",
        });
      },
    });
  };

  return (
    <div className="bg-prime-800 h-[70vh] w-full flex items-center justify-center text-prime-100">
      <form
        onSubmit={handleSubmit}
        className="bg-prime-700 px-4 sm:px-6 py-8 md:p-8 min-w-[70%] xs:min-w-96 2xl:min-w-[35rem] 2xl:px-12 rounded-lg"
      >
        <h2 className="text-3xl tracking-wider text-center">Register</h2>
        <div className="w-18 h-[3px] mx-auto bg-prime-200 "></div>
        <div className="mb-3 relative">
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            id="username"
            className="w-full block border-b-2 border-b-prime-200 p-2 pl-8 mt-4 mb-1 focus:outline-0 focus-visible:border-b-indigo-200 active:border-b-indigo-200 autofill:bg-transparent 2xl:text-xl"
            value={username}
            onChange={handleOnChange}
          />
          <span className="absolute top-4 left-3 text-sm lg:text-md">
            <FaUser />
          </span>
        </div>
        <div className="mb-3 relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            className="w-full block border-b-2 border-b-prime-200 p-2 pl-8 mt-4 mb-1 focus:outline-0 focus-visible:border-b-indigo-200 active:border-b-indigo-200 autofill:bg-transparent 2xl:text-xl"
            value={email}
            onChange={handleOnChange}
          />
          <span className="absolute top-4 left-3 text-sm lg:text-md">
            <MdEmail />
          </span>
        </div>
        <div className="mb-3 relative">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full block border-b-2 border-prime-200 p-2 pl-8  mt-4 mb-1 focus:outline-0 focus-visible:border-b-indigo-200 active:border-b-indigo-200 autofill:bg-transparent 2xl:text-xl"
            value={password}
            onChange={handleOnChange}
          />
          <span className="absolute top-4 left-3 text-xs lg:text-md">
            <FaLock />
          </span>
        </div>
        <div>
          <button className="w-full bg-prime-200 px-3 py-2 text-md  rounded-lg font-normal cursor-pointer tracking-wide hover:brightness-125 transition-all duration-300 mt-2">
            Login
          </button>

          <Link
            to={"/login"}
            className="block mt-6 text-center hover:scale-105 transition-all duration-300"
          >
            Already have an account &#8594;
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
