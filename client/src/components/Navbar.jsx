import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {
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
    <div className="backdrop-blur-lg sticky top-1 z-50 w-full  bg-transparent border border-[hsl(var(--border))] rounded-[0.9em] text-[hsl(var(--foreground))] flex justify-between items-center px-4 shadow-md dark:shadow-none">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="w-16 h-16 rounded-full" />
        <h1 className="aniamted-gradient text-3xl font-semibold mr-12">
          Binary Blogs
        </h1>
        <ul className="flex text-zinc-400 items-center text-sm gap-10 font-medium">
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
          {!auth?.email && (
            <li className="hover:text-[hsl(var(--foreground))] duration-150">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="flex items-center gap-2 w-[23%] ">
        <input
          className="border bg-[hsl(var(--input))] border-[hsl(var(--border))] rounded-[0.5rem] py-2 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-sm focus:outline-none flex-grow duration-200 text-[hsl(var(--secondary-foreground))] pl-2"
          type="search"
          placeholder="Search blogs..."
          // onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border border-[hsl(var(--border))] p-2 rounded-[var(--radius)] hover:bg-[hsl(var(--secondary))]">
          <MdOutlineLightMode size={25} onClick={handleMode} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
