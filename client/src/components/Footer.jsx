import { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const [Showhint, setShowhint] = useState(false);

  return (
    <footer className=" bg-[hsl(var(--background))] group relative text-[hsl(var(--foreground))] border-t border-[hsl(var(--border))] mt-5 lg:mt-10">
      <div className="max-w-screen-2xl mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Binary Blogs</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-sm md:text-base flex justify-center md:justify-end space-x-6">
          <Link
            to="/about"
            className="hover:underline underline-offset-4 hover:text-[hsl(var(--primary))]"
          >
            Credits
          </Link>
          <a
            href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295/"
            target="_blank"
            className="hover:underline underline-offset-4 hover:text-[hsl(var(--primary))]"
          >
            Contact
          </a>
          <Link
            to="/feedback"
            className="hover:underline underline-offset-4 hover:text-[hsl(var(--primary))]"
          >
            Feedback
          </Link>
          <Link
            to="/privacy"
            className="text-center hover:text-[hsl(var(--primary))]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-[hsl(var(--muted-foreground))] py-2 border-t border-[hsl(var(--border))]">
        Made by <span>f(x) = 5x² - 14x + 6 where x={"{0,1,2,3}"}</span>
        {/* <span class="glitch">Binary Blogs</span> */}
      </div>
      {/* Hint */}
      <p className="lg:group-hover:opacity-100 group-active:opacity-100 bg-zinc-100 opacity-0 duration-1000 p-2 text-xs absolute left-[50%] dark:bg-zinc-800 rounded-lg -translate-x-[50%] bottom-10 max-w-xs">
        <span className="font-bold text-[hsl(var(--blue-foreground))]">
          Hint:{" "}
        </span>
        First put values of x in the equation and then map the obtained integers
        to alphabets {"(example: A - 1, B - 2, ....)"}
      </p>
    </footer>
  );
};

export default Footer;
