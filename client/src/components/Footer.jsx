import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" bg-[hsl(var(--background))] text-[hsl(var(--foreground))] border-t border-[hsl(var(--border))] mt-5 lg:mt-10">
      <div className="max-w-screen-2xl mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Binary Blogs</h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center md:justify-end space-x-6">
          <Link to="/about" className="hover:text-[hsl(var(--primary))]">
            About
          </Link>
          <Link to="/contact" className="hover:text-[hsl(var(--primary))]">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-[hsl(var(--primary))]">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-[hsl(var(--muted-foreground))] py-2 border-t border-[hsl(var(--border))]">
        Made by{" "}
        <a href="https://yourportfolio.com" className="hover:underline">
          Faris
        </a>
      </div>
    </footer>
  );
};

export default Footer;
