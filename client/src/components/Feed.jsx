import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogsContext from "../context/blogsProvider";

const Feed = ({ blogs }) => {
  const { setSelectedBlog } = useContext(BlogsContext);

  return (
    <div className="border flex flex-wrap border-[hsl(var(--border))] rounded-[var(--radius)] justify-evenly">
      {blogs.map((element, index) => {
        return (
          <div
            key={index}
            className="flex w-3/12 flex-col border border-[hsl(var(--border))] rounded-[var(--radius)] p-3 m-4"
          >
            <h1 className="text-xl mb-4">
              <Link
                className="hover:underline"
                to={`/blogs/${element._id}`}
                onClick={() => setSelectedBlog(element)}
              >
                {element.title}
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
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
