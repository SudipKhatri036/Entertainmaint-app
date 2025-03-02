import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

function AppLayout() {
  return (
    <div className="relative bg-prime-800 md:py-8 min-h-screen md:px-12 flex items-start gap-6 flex-col md:flex-row text-prime-100">
      <SideBar />
      <main className="max-w-7xl mx-auto w-full px-6 md:px-0">
        <SearchBar />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
