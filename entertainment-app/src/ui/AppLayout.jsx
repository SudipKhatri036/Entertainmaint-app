import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

function AppLayout() {
  return (
    <div className="relative bg-prime-800 md:py-8 min-h-screen md:px-8 flex items-start gap-4 md:gap-6 flex-col lg:flex-row text-prime-100">
      <SideBar />
      <main className="max-w-[1440px] mx-auto w-full px-6 md:px-0">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
