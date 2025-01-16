import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const Navbar = ({ smallDeviceSidebar, setSmallDeviceSidebar }) => {
  const { auth } = useContext(AuthContext);
  const handleMode = () => {
    const mode = document.querySelector("html").className;
    if (mode == "light") {
      document.querySelector("html").className = "dark";
    } else {
      document.querySelector("html").className = "light";
    }
  };

  return (
    <div
      className="pr-2 py-2  xl:py-0 backdrop-blur-lg sticky top-1 z-50 w-full  bg-transparent border border-[hsl(var(--border))] rounded-[0.9em] text-[hsl(var(--foreground))] flex justify-between items-center xl:px-4 shadow-md dark:shadow-none overflow-hidden"
      id="navbar"
    >
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="logo"
          className="w-12 h-12 xl:w-16 xl:h-16 rounded-full"
        />
        <h1 className="aniamted-gradient text-2xl xl:text-3xl font-semibold xl:mr-12">
          Binary Blogs
        </h1>
        <ul className="hidden xl:flex text-zinc-400 items-center text-sm gap-10 font-medium">
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Blogs
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Community ▼
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Pricing
          </li>
          {auth?.email && auth?.email && (
            <li className="hover:text-[hsl(var(--foreground))] duration-150">
              <Link to={"/logout"}>logout</Link>
            </li>
          )}

          {(!auth?.email || !auth?.email) && (
            <li className="hover:text-[hsl(var(--foreground))] duration-150">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center xl:gap-2 xl:w-[23%] ">
        <input
          className="hidden xl:inline border bg-[hsl(var(--input))] border-[hsl(var(--border))] rounded-[0.5rem] py-2 lg:hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-sm focus:outline-none flex-grow duration-200 text-[hsl(var(--secondary-foreground))] pl-2"
          type="search"
          placeholder="Search blogs..."
          // onChange={(e) => setSearch(e.target.value)}
        />
        <button className="xl:text-2xl border border-[hsl(var(--border))] p-2 rounded-[var(--radius)] md:hover:bg-[hsl(var(--secondary))]">
          <MdOutlineLightMode onClick={handleMode} />
        </button>
        <button
          className={`lg:hidden border ml-2 border-[hsl(var(--border))] ${
            smallDeviceSidebar &&
            "text-[hsl(var(--blue-foreground))] transition-colors duration-500"
          } p-2 rounded-[var(--radius)]`}
        >
          <TbLayoutSidebarLeftCollapse
            onClick={() => setSmallDeviceSidebar(!smallDeviceSidebar)}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
