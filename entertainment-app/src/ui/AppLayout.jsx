import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import { Button } from "primereact/button";

function AppLayout() {
  return (
    <div className="relative bg-prime-800 md:py-8 min-h-screen md:px-8 flex items-start gap-4 md:gap-6 flex-col lg:flex-row text-prime-100">
      <SideBar />
      <main className="max-w-[1440px] mx-auto w-full px-6 md:px-0">
        <SearchBar />
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="dark"
          transition={Bounce}
        />
      </main>
    </div>
  );
}

export default AppLayout;
