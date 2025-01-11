import { useEffect } from "react";

const Sidebar = () => {
  let navbarHeight = 0;
  useEffect(() => {
    navbarHeight = document.querySelector("#navbar").clientHeight + 21;
    console.log(navbarHeight);
  }, []);
  return (
    <div
      className="w-1/4 sticky left-0 h-36 border-t border-r pl-3 pt-3 border-b border-[hsl(var(--border))] rounded-xl"
      style={{ top: navbarHeight }}
    >
      hello
    </div>
  );
};

export default Sidebar;
