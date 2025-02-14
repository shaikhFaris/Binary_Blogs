import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const Navbar = ({ smallDeviceSidebar, setSmallDeviceSidebar }) => {
  const [communityHover, setcommunityHover] = useState(false);
  const [devsHover, setdevsHover] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
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
      className="pr-2 py-2  xl:py-0 backdrop-blur-lg sticky top-1 z-50 w-full  bg-transparent border border-[hsl(var(--border))] rounded-[0.9em] text-[hsl(var(--foreground))] flex justify-between items-center xl:px-4 shadow-md dark:shadow-none overflow-hidden lg:overflow-visible"
      id="navbar"
    >
      <div
        className="flex items-center cursor-default"
        onClick={() => navigate("/")}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="w-12 h-12 xl:w-16 xl:h-16 rounded-full"
        />
        <h1 className="aniamted-gradient text-2xl xl:text-3xl font-semibold xl:mr-12">
          Binary Blogs
        </h1>
        <ul className="hidden xl:flex text-zinc-400 dark:text-zinc-600 items-center text-sm gap-8 font-medium">
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150 cursor-pointer">
            Trending
          </li>
          <li
            className="hover:text-[hsl(var(--foreground))] relative duration-150 cursor-pointer"
            onMouseEnter={() => setcommunityHover(true)}
            onMouseLeave={() => setcommunityHover(false)}
          >
            Community{" "}
            <span
              className={`transition-all inline-flex ${
                communityHover &&
                "rotate-180 text-[hsl(var(--blue-foreground))] "
              } duration-300 `}
            >
              ▼
            </span>
            <AnimatePresence>
              {communityHover && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-10 shadow-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] w-[32vw] h-[40vh] rounded-xl p-3 dark:shadow-none "
                >
                  hello
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li
            className="hover:text-[hsl(var(--foreground))] relative duration-150 cursor-pointer"
            onMouseEnter={() => setdevsHover(true)}
            onMouseLeave={() => setdevsHover(false)}
          >
            Developer{" "}
            <span
              className={`transition-all inline-flex ${
                devsHover && "rotate-180 text-[hsl(var(--blue-foreground))] "
              } duration-200 `}
            >
              ▼
            </span>
            <AnimatePresence>
              {devsHover && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-10 shadow-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] w-[32vw] h-[40vh] rounded-xl p-3"
                >
                  hello
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          {auth?.email && auth?.email && (
            <li className="hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] px-4 py-[0.4rem] rounded-lg duration-150">
              <Link to={"/logout"}>logout</Link>
            </li>
          )}

          {(!auth?.email || !auth?.email) && (
            <li className="hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] px-4 py-[0.4rem] rounded-lg duration-150">
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
