import React from "react";
import Feed from "../components/Feed";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

const Home = ({ posts }) => {
  // posts = [];
  const navigate = useNavigate();
  return (
    <div className="mt-10 pl-7 text-[hsl(var(--foreground))] min-h-screen">
      <Hero heading="Learn from these blogs." />
      <button
        className="mt-7 text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))] hover:text-green-600 p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] w-2/12 font-medium duration-150"
        onClick={() => navigate("/create")}
      >
        Create new blog
      </button>
      <div className="mt-10">
        {posts.length > 0 ? <Feed posts={posts} /> : <h1>No posts to show</h1>}
      </div>
    </div>
  );
};
export default Home;
