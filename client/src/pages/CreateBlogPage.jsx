import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import { VscPreview } from "react-icons/vsc";

const CreateBlogPage = ({ sethideFooter }) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const navigate = useNavigate();
  const [CollapseSidebar, setCollapseSidebar] = useState(false);
  const [togglePreview, settogglePreview] = useState(false);
  const [post, setpost] = useState({
    id: null,
    title: "",
    datetime: "",
    body: "",
  });
  const [navbarHeight, setnavbarHeight] = useState();
  const [blogBody, setblogBody] = useState(``);

  useEffect(() => {
    titleRef?.current.focus();
    setnavbarHeight(document.querySelector("#navbar").clientHeight + 21);
    console.log(document.querySelector("#navbar").clientHeight + 21);
  }, []);

  const handleBlogChange = (e) => {
    console.log(e.target.value);
    setblogBody(`${e.target.value}`);
    const textarea = bodyRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = `${textarea.scrollHeight}px`; // Adjust to scroll height
  };

  return (
    // let's add a sidebar
    <div className="text-[hsl(var(--foreground))] min-h-screen flex gap-1 mb-5">
      <Sidebar
        sethideFooter={sethideFooter}
        CollapseSidebar={CollapseSidebar}
        setCollapseSidebar={setCollapseSidebar}
      />
      <form
        className="flex flex-col gap-2 w-full xl:pl-8 mt-6 "
        onSubmit={(e) => {
          e.preventDefault();
          console.log(post);
          // setNewPost({ ...post, datetime: new Date().toUTCString() });
          navigate("/");
        }}
      >
        <div
          className={`absolute right-0 p-2 pr-3 ${
            togglePreview && "border p-0 shadow-md dark:shadow-none"
          } bg-[hsl(var(--background))] overflow-x-scroll overflow-y-scroll border-[hsl(var(--border))] rounded-xl`}
          style={{
            height: `calc(98vh - ${navbarHeight}px)`,
          }}
        >
          <div
            className={`flex items-center ${
              togglePreview && "m-3 justify-between"
            }`}
          >
            <div className="flex gap-5 items-center">
              <VscPreview
                title="preview"
                className=" text-3xl hover:scale-110 duration-150 "
                onClick={() => {
                  settogglePreview(!togglePreview);
                }}
              />
              {togglePreview && (
                <span className="text-4xl font-medium">Preview</span>
              )}
            </div>
            {togglePreview && (
              <IoIosCloseCircleOutline
                className="text-3xl font-medium"
                onClick={() => {
                  settogglePreview(!togglePreview);
                }}
              />
            )}
          </div>
          <Preview
            blogBody={blogBody}
            togglePreview={togglePreview}
            settogglePreview={settogglePreview}
          />
        </div>
        <input
          ref={titleRef}
          className={`max-w-[90%] p-2 bg-transparent pr-3 outline-none xl:text-5xl font-semibold dark:text-zinc-200 placeholder-zinc-700 ${
            CollapseSidebar && togglePreview && "max-w-[55%]"
          }`}
          type="text"
          minLength={5}
          maxLength={50}
          // autoCorrect=,
          placeholder="Blog title..."
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
        <textarea
          ref={bodyRef}
          minLength={10}
          className={`xl:text-xl max-w-[90%] p-3 break-all resize-y min-h-[50vh] bg-transparent focus:border-collapse outline-none placeholder-zinc-700 ${
            CollapseSidebar && togglePreview && "max-w-[55%]"
          }`}
          placeholder="Write blog body in mardkdown..."
          onChange={handleBlogChange}
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
