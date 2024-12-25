import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostPage = ({ posts, setPosts, setDeletedPost }) => {
  const navigate = useNavigate();
  const params = useParams();
  const post = posts.find((post) => post.id.toString() === params.id);
  const handleDelete = () => {
    setDeletedPost(posts.filter((item) => item.id.toString() == params.id)[0]);
    setPosts(posts.filter((item) => item.id.toString() != params.id));
    navigate("/");
  };
  return (
    <div className="mt-10 pl-7 text-[hsl(var(--foreground))] min-h-screen ">
      {post != null ? (
        <div>
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] break-words overflow-hidden">
            {post.title ? post.title : "empty title"}
          </h1>
          <div className="w-4/5 mt-5 mb-5">
            <span className="text-green-400 text-lg  font-mono">
              {post.datetime}
            </span>
            <p className="mt-5 text-base text-[#a1a1aa] break-words overflow-hidden">
              {post.body ? post.body : "empty blog"}
            </p>
          </div>
          <button
            className="text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-[hsl(var(--destructive))] hover:text-[hsl(var(--destructive-foreground))] p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] w-2/12 font-medium duration-150"
            onClick={handleDelete}
          >
            Delete blog
          </button>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-5 items-center flex-col">
          <h1 className="text-7xl text-red-600">Page Not found</h1>
          <button
            className=" text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-green-600 hover:text-[hsl(var(--primary))] p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] w-2/3 font-medium duration-150"
            onClick={(e) => navigate("/")}
          >
            back to home
          </button>
        </div>
      )}
    </div>
  );
};

export default PostPage;
