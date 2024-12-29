import { Link } from "react-router-dom";
const Feed = ({ posts }) => {
  return (
    <div className="border flex flex-wrap border-[hsl(var(--border))] rounded-[var(--radius)] justify-evenly">
      {posts.map((element) => {
        return (
          <div
            key={element.id}
            className="flex w-3/12 flex-col border border-[hsl(var(--border))] rounded-[var(--radius)] p-3 m-4"
          >
            <h1 className="text-xl mb-4">
              <Link className="hover:underline" to={`/posts/${element.id}`}>
                {element.title}
              </Link>
            </h1>
            <div>
              <span className="text-green-400 text-sm font-mono">
                {element.datetime}
              </span>
              <p className="text-xs text-[#a1a1aa]">
                {element.body
                  ? element.body.length <= 90
                    ? element.body
                    : `${element.body.slice(0, 90)}...`
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
