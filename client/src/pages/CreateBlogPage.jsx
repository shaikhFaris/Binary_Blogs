import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = ({ sethideFooter }) => {
  const titleRef = useRef();
  const navigate = useNavigate();
  const [post, setpost] = useState({
    id: null,
    title: "",
    datetime: "",
    body: "",
  });

  useEffect(() => {
    titleRef?.current.focus();
  }, []);

  return (
    // let's add a sidebar
    <div className="mt-5 text-[hsl(var(--foreground))] min-h-screen flex gap-1">
      <Sidebar sethideFooter={sethideFooter} />
      <form
        className="flex flex-col gap-5 w-full pl-8"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(post);
          // setNewPost({ ...post, datetime: new Date().toUTCString() });
          navigate("/");
        }}
      >
        <input
          ref={titleRef}
          className="max-w-[85%] min-h-16 bg-transparent  pr-3 outline-none text-4xl font-semibold placeholder-zinc-700"
          type="text"
          minLength={5}
          maxLength={50}
          placeholder="Enter blog title..."
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
        <textarea
          minLength={10}
          className="max-w-[85%] bg-transparent focus:border-collapse pr-3 outline-none font-semibold placeholder-zinc-700"
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
