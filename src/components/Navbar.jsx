import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = ({ setSearch }) => {
  const handleMode = () => {
    const mode = document.querySelector("html").className;
    if (mode == "light") {
      document.querySelector("html").className = "dark";
    } else {
      document.querySelector("html").className = "light";
    }
  };

  return (
    <div className="w-full border border-[hsl(var(--border))] rounded-[0.5em] text-[hsl(var(--foreground))] flex justify-between items-center pl-4 pr-4">
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="w-20 h-20 rounded-full " />
        <h1 className="text-2xl font-bold ">Binary Blogs</h1>
      </div>
      <div className=" flex-grow flex justify-center">
        <ul className="flex text-zinc-400 items-center text-base gap-10 font-medium ">
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Blogs
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Community
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Pricing
          </li>
          <li className="hover:text-[hsl(var(--foreground))] duration-150">
            Login
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 w-[23%] ">
        <input
          className="border bg-[hsl(var(--input))] border-[hsl(var(--border))] rounded-[0.5rem] py-2 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-sm focus:outline-none flex-grow duration-200 text-[hsl(var(--secondary-foreground))] pl-2"
          type="search"
          placeholder="Search blogs..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border border-[hsl(var(--border))] p-2 rounded-[var(--radius)] hover:bg-[hsl(var(--secondary))]">
          <MdOutlineLightMode size={25} onClick={handleMode} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
