import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import { VscPreview } from "react-icons/vsc";
import Tooltip from "../components/Tooltip";

const CreateBlogPage = ({ sethideFooter }) => {
  const titleRef = useRef();
  const navigate = useNavigate();
  const [togglePreview, settogglePreview] = useState(false);
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
    <div className="text-[hsl(var(--foreground))] min-h-screen flex gap-1 mb-5">
      <Sidebar sethideFooter={sethideFooter} />
      <form
        className="flex flex-col gap-5 w-full pl-8 mt-6 border"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(post);
          // setNewPost({ ...post, datetime: new Date().toUTCString() });
          navigate("/");
        }}
      >
        <div className="absolute right-0 border min-h-[90vh] bg-[hsl(var(--background))] overflow-x-hidden overflow-y-scroll">
          <VscPreview
            className=" text-3xl hover:scale-110 duration-150 mx-3"
            onClick={() => {
              settogglePreview(!togglePreview);
            }}
          />
          <Preview
            togglePreview={togglePreview}
            settogglePreview={settogglePreview}
          />
        </div>
        <input
          ref={titleRef}
          className="max-w-[90%] border p-2 bg-transparent pr-3 outline-none text-4xl font-semibold placeholder-zinc-700"
          type="text"
          minLength={5}
          maxLength={50}
          // autoCorrect=,
          placeholder="Blog title..."
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
        <textarea
          minLength={10}
          className="max-w-[90%] bg-transparent border focus:border-collapse pr-3 outline-none font-semibold placeholder-zinc-700"
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
