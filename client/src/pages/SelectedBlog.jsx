import { useContext, useEffect } from "react";
import BlogsContext from "../context/blogsProvider";
const SelectedBlog = () => {
  const { selectedBlog, setSelectedBlog } = useContext(BlogsContext);
  return (
    <div className="pl-7 text-[hsl(var(--foreground))] min-h-screen overflow-hidden">
      <div className="mt-10 flex w-full justify-between items-center ">
        <h1 className=" text-[hsl(var(--blue-foreground))] text-5xl leading-12 font-semibold w-2/3">
          {selectedBlog.title}
        </h1>
        <p className="text-xs mr-4 text-zinc-600 cursor-default hover:text-zinc-400 duration-150">
          Published at: {selectedBlog.publishedAt}
        </p>
      </div>
      <div className="mt-5">
        {/* {console.log()} */}
        {selectedBlog.content?.split("\n").map((lines, index) => {
          // if (lines.startWith("```")) return <pre>{lines}</pre>;
          return <p key={index}>{lines}</p>;
        })}
      </div>
    </div>
  );
};

export default SelectedBlog;
