import { useState } from "react";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = ({ seetNewPost }) => {
  const navigate = useNavigate();
  const [post, setpost] = useState({
    id: null,
    title: "",
    datetime: "",
    body: "",
  });
  return (
    <div className="mt-10 pl-7 text-[hsl(var(--foreground))] min-h-screen">
      <Hero heading="Create a new blog." />
      <form
        className="mt-7 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(post);
          seetNewPost({ ...post, datetime: new Date().toUTCString() });
          navigate("/");
        }}
      >
        <input
          className="border bg-[hsl(var(--input))] border-[hsl(var(--border))] rounded-[0.5rem] py-2 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-lg focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-5 w-2/3 h-12"
          type="text"
          minLength={5}
          maxLength={10}
          placeholder="Enter blog title"
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
        <textarea
          minLength={10}
          className="border bg-[hsl(var(--input))] border-[hsl(var(--border))] rounded-[0.5rem] py-2 hover:bg-[hsl(var(--card))] hover:text-[hsl(var(--card-foreground))] text-lg focus:outline-none duration-200 text-[hsl(var(--secondary-foreground))] pl-5 w-2/3 min-h-32"
          placeholder="Enter blog body"
          onChange={(e) => setpost({ ...post, body: e.target.value })}
        />
        <button
          className=" text-[hsl(var(--primary-foreground))] bg-[hsl(var(--primary))] hover:bg-green-600 hover:text-[hsl(var(--primary))] p-2 border border-[hsl(var(--border))] rounded-[var(--radius)] w-2/12 font-medium duration-150"
          type="submit"
        >
          Create new blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
