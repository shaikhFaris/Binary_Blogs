import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar_2 = () => {
  const handleMode = () => {
    const mode = document.querySelector("html").className;
    if (mode == "light") {
      document.querySelector("html").className = "dark";
    } else {
      document.querySelector("html").className = "light";
    }
  };
  return (
    <div className=" absolute top-0 w-full z-40 flex justify-center overflow-hidden max-w-screen-2xl ">
      <div className=" w-[95%] flex items-center justify-between overflow-hidden">
        <div className="flex items-center ">
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 xl:w-16 xl:h-16 rounded-full"
          />
          <h1 className="md:text-2xl text-[hsl(var(--foreground))] xl:text-3xl font-medium xl:mr-12">
            Binary Blogs
          </h1>
        </div>
        <div className="flex gap-4 overflow-hidden">
          <button className="bg-transparent backdrop-blur-sm text-xs md:text-base text-zinc-500 lg:hover:text-[hsl(var(--foreground))] lg:hover:bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] py-1 px-2 md:px-4 md:py-[0.4rem] rounded-lg duration-150">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="bg-transparent backdrop-blur-sm text-zinc-500 lg:hover:text-[hsl(var(--foreground))] lg:hover:bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] p-2 md:p-3 rounded-lg duration-150">
            <MdOutlineLightMode onClick={handleMode} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar_2;
