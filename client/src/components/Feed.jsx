import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import BlogsContext from "../context/blogsProvider";

const Feed = ({ blogs }) => {
  const { setSelectedBlog } = useContext(BlogsContext);
  const navigate = useNavigate();

  return (
    <div className="border flex flex-wrap border-[hsl(var(--border))] rounded-[var(--radius)] justify-evenly">
      {blogs.map((element, index) => {
        return (
          <div
            key={index}
            className="flex justify-around bg-[hsl(var(--blue-background))] xl:w-3/12 flex-col border border-[hsl(var(--border))] rounded-[var(--radius)] p-5 m-4"
          >
            <h1 className="text-xl mb-4">
              <Link
                className="hover:underline"
                to={`/blogs/${element.blogId}`}
                onClick={() => setSelectedBlog(element)}
              >
                {element.title
                  ? element.title.length <= 60
                    ? element.title
                    : `${element.title.slice(0, 60)}...`
                  : "empty blog"}
              </Link>
            </h1>
            <div>
              <span className="text-green-400 text-sm font-mono">
                {element.publishedAt}
              </span>
              <p className="text-xs text-[#a1a1aa]">
                {element.content
                  ? element.content.length <= 90
                    ? element.content
                    : `${element.content.slice(0, 90)}...`
                  : "empty blog"}
              </p>
            </div>
            <button
              className="w-4/5 mt-5 bg-[hsl(var(--blue-foreground))] text-[hsl(var(--background))] font-medium border rounded-[var(--radius)] py-[0.4rem] border-[hsl(var(--border))] mx-auto hover:scale-105 duration-150"
              onClick={() => {
                setSelectedBlog(element);
                navigate(`/blogs/${element.blogId}`);
              }}
            >
              Open
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
