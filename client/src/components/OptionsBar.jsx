import { useEffect } from "react";
import { Link } from "react-router-dom";

const OptionsBar = ({ smallDeviceSidebar, setSmallDeviceSidebar }) => {
  useEffect(() => {
    smallDeviceSidebar === true && document.body.classList.add("scroll-locked"); // Apply lock
    smallDeviceSidebar === false &&
      document.body.classList.remove("scroll-locked"); // Apply lock
    return () => {
      document.body.classList.remove("scroll-locked"); // Remove lock
    };
  }, [smallDeviceSidebar]);

  return (
    <div
      className={`lg:hidden ${
        smallDeviceSidebar ? "translate-x-0" : "translate-x-[100%] scale-0"
      } transition-all duration-500 border-l shadow-md dark:shadow-none w-11/12 border-[hsl(var(--border))] h-screen right-0 absolute bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-5 `}
    >
      <ul className="text-zinc-400 flex flex-col text-lg gap-2 font-medium">
        <li className="hover:text-[hsl(var(--foreground))] duration-150">
          <Link to="/" onClick={() => setSmallDeviceSidebar(false)}>
            Home
          </Link>
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
      </ul>
    </div>
  );
};

export default OptionsBar;
